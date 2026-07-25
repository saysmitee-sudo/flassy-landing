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
      <div className="container-page py-14 text-center md:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-[14ch] text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-tight text-white">
            {contactCopy.headline}
          </h2>
          <div className="mt-7 flex justify-center md:mt-8">
            <Button href={site.telegram.url} external showArrow variant="dark">
              {contactCopy.cta}
            </Button>
          </div>

          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:mt-12"
            aria-label="Footer"
          >
            {footer.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-white transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:mt-5">
            <a
              href={site.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-white transition-opacity hover:opacity-60"
            >
              {site.telegram.handle}
              <ArrowUpRight className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={0.08}
          className="mx-auto mt-12 max-w-lg rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-left md:mt-14 md:p-8"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-white/90 disabled:opacity-50"
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
          © {year} {site.displayName} — AI Visual Content Agency
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
