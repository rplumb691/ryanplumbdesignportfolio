"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[560px] px-5 pb-24 pt-16">
        <h1 className="font-display text-[clamp(32px,5vw,44px)] leading-[1.1] tracking-[-0.02em] text-ink">
          Get in touch
        </h1>
        <p className="mt-3 text-[17px] leading-[1.6] text-ink/70">
          Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll get back to you.
        </p>

        {status === "sent" ? (
          <div className="mt-12 rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-8 text-center">
            <p className="text-[17px] font-medium text-emerald-900">Message sent</p>
            <p className="mt-1 text-[15px] text-emerald-700">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-[14px] font-medium text-emerald-700 underline underline-offset-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-[13px] font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-[#d4d4d4] bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[13px] font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-[#d4d4d4] bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[13px] font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full resize-none rounded-lg border border-[#d4d4d4] bg-white px-3.5 py-2.5 text-[15px] leading-[1.6] text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                placeholder="What can I help you with?"
              />
            </div>

            {status === "error" && (
              <p className="text-[13px] text-red-600">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-ink px-4 py-2.5 text-[15px] font-medium text-white transition hover:bg-ink/90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
