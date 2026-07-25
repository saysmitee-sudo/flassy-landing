"use server";

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

  // Ready for Resend / email provider when RESEND_API_KEY is configured.
  console.info("[FLASSY contact]", { name, email, company, message });

  return {
    ok: true,
    message:
      "Thanks — we received your brief. Prefer a faster reply? Message us on Telegram @flassystudio.",
  };
}
