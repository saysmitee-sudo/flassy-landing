"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactState = {
  ok: boolean;
  error?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!email || !isEmail(email)) {
    return { ok: false, error: "Please enter a valid work email." };
  }
  if (!message || message.length < 10) {
    return { ok: false, error: "Please share a short brief (at least 10 characters)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "Email is not configured. Please message us on Telegram." };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? site.contactEmail;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Flassy Agency <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const subject = company
    ? `New brief from ${name} (${company})`
    : `New brief from ${name}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    "Brief:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.5;color:#111">
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      <p><strong>Brief:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[FLASSY contact] Resend error:", error);
    return {
      ok: false,
      error: "Could not send your brief. Please try again or message us on Telegram.",
    };
  }

  return {
    ok: true,
    message: `Thanks — we received your brief. Prefer a faster reply? Message us on Telegram ${site.telegram.handle}.`,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
