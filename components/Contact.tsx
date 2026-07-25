"use client";

import { useActionState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { contact as contactCopy, footer } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { ok: false };

export function Contact() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="container-page py-20 text-center md:py-28">
        <Reveal>
          <p className="text-[15px] font-medium text-white md:text-base">
            {contactCopy.eyebrow}
          </p>
          <h2 className="mx-auto mt-5 max-w-[14ch] text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.08] tracking-tight text-white">
            {contactCopy.headline}
          </h2>
          <div className="mt-9 flex justify-center md:mt-10">
            <Button href={site.telegram.url} external showArrow variant="dark">
              {contactCopy.cta}
            </Button>
          </div>

          <nav
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:mt-14"
            aria-label="Footer"
          >
            {footer.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[17px] font-medium text-white transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:mt-6">
            <a
              href={site.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[17px] font-medium text-white transition-opacity hover:opacity-60"
            >
              Telegram
              <ArrowUpRight className="size-4 shrink-0" aria-hidden />
            </a>
            <a
              href={site.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[17px] font-medium text-white transition-opacity hover:opacity-60"
            >
              {site.telegram.handle}
              <ArrowUpRight className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={0.08}
          className="mx-auto mt-16 max-w-lg rounded-[32px] border border-white/10 bg-white/[0.04] p-7 text-left md:mt-20 md:p-10"
        >
          <h3 className="text-center text-lg font-medium text-white">Or send a brief</h3>
          <p className="mt-2 text-center text-sm text-white/50">
            Prefer Telegram for speed — or leave details here and we&apos;ll follow up.
          </p>

          {state.ok ? (
            <div className="mt-6 space-y-4 text-center">
              <p className="text-sm leading-relaxed text-white/70">{state.message}</p>
              <div className="flex justify-center">
                <Button href={site.telegram.url} external showArrow variant="dark">
                  Open Telegram
                </Button>
              </div>
            </div>
          ) : (
            <form action={action} className="mt-6 space-y-4">
              <Field id="name" name="name" label="Name" autoComplete="name" required />
              <Field
                id="email"
                name="email"
                type="email"
                label="Work email"
                autoComplete="email"
                required
              />
              <Field
                id="company"
                name="company"
                label="Company (optional)"
                autoComplete="organization"
              />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-center text-sm font-medium text-white/80">
                  Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-y rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/30"
                  placeholder="Goals, channels, timelines, references…"
                />
              </div>
              {state.error ? (
                <p className="text-center text-sm text-red-400" role="alert">
                  {state.error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={pending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-[17px] font-medium text-ink transition-colors hover:bg-white/90 disabled:opacity-50"
              >
                {pending ? "Sending…" : "Send brief"}
                {!pending ? <Send className="size-4" aria-hidden /> : null}
              </button>
            </form>
          )}
        </Reveal>
      </div>

      <div className="container-page border-t border-white/10 py-8 text-center">
        <p className="text-sm text-white/40">
          © {year} {site.displayName} — AI Visual Content Studio
        </p>
      </div>
    </footer>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-center text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-center text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/30"
      />
    </div>
  );
}
