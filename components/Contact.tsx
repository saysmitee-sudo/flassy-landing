"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { contact } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { ok: false };

export function Contact() {
  const [state, action, pending] = useActionState(submitContact, initial);

  return (
    <Section id="contact" theme="dark" className="border-t border-white/10">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {contact.headline}
        </h2>
        <p className="mt-3 text-base text-text-muted-dark md:text-[17px]">
          {contact.subhead}
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href={site.telegram.url}
            external
            showArrow
            variant="dark"
            className="w-full max-w-xs sm:w-auto"
          >
            {contact.telegramLabel}
          </Button>
        </div>
      </Reveal>

      <Reveal
        className="mx-auto mt-12 max-w-lg rounded-2xl border border-white/10 bg-surface p-6 md:mt-16 md:p-8"
        delay={0.12}
      >
        <h3 className="text-lg font-semibold text-white">{contact.formTitle}</h3>

        {state.ok ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed text-text-muted-dark">
              {state.message}
            </p>
            <Button href={site.telegram.url} external showArrow variant="dark">
              Open Telegram
            </Button>
          </div>
        ) : (
          <form action={action} className="mt-6 space-y-4">
            <Field
              id="name"
              name="name"
              label={contact.fields.name}
              autoComplete="name"
              required
            />
            <Field
              id="email"
              name="email"
              type="email"
              label={contact.fields.email}
              autoComplete="email"
              required
            />
            <Field
              id="company"
              name="company"
              label={contact.fields.company}
              autoComplete="organization"
            />
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-white/80"
              >
                {contact.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/30"
                placeholder="Goals, channels, timelines, references…"
              />
            </div>

            {state.error ? (
              <p className="text-sm text-red-400" role="alert">
                {state.error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={pending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-neutral disabled:opacity-50"
            >
              {pending ? "Sending…" : contact.submit}
              {!pending ? <Send className="size-4" aria-hidden /> : null}
            </button>
          </form>
        )}
      </Reveal>
    </Section>
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
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/30"
      />
    </div>
  );
}
