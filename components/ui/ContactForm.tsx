"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { CONTACT_EMAILS } from "@/lib/constants";

const SUBJECTS = [
  { label: "Support & aide", value: "Support & aide", email: CONTACT_EMAILS.support },
  { label: "Presse & media", value: "Presse & media", email: CONTACT_EMAILS.press },
  { label: "Partenariat", value: "Partenariat", email: CONTACT_EMAILS.partners },
  { label: "Autre demande", value: "Autre demande", email: CONTACT_EMAILS.general },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0].value);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = SUBJECTS.find((s) => s.value === subject) ?? SUBJECTS[0];
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${target.email}?subject=${encodeURIComponent(
      `[Karria] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
            Nom
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="vous@exemple.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-2">
          Sujet
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Comment pouvons-nous vous aider ?"
        />
      </div>

      <button type="submit" className="btn-primary inline-flex items-center gap-2">
        Envoyer le message
        <Send className="w-4 h-4" />
      </button>

      <p className="text-xs text-muted-foreground/70">
        L&apos;envoi ouvre votre application mail habituelle, pré-remplie avec votre message.
      </p>
    </form>
  );
}
