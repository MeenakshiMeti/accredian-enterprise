"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", company: "", teamSize: "" };

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-navy-900 py-24 text-white">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-500">Get started</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Tell us about your team, we&apos;ll propose a program.
          </h2>
          <p className="mt-4 text-white/70">
            No generic sales calls &mdash; you&apos;ll hear back with a curriculum outline
            tailored to your team size and goals within two business days.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-navy-800/60 p-8">
          <div className="mb-4">
            <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-white placeholder-white/30 focus:border-gold-500"
              placeholder="Renu Tomar"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-white placeholder-white/30 focus:border-gold-500"
              placeholder="you@company.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="mb-1.5 block text-sm text-white/70">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={form.company}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-white placeholder-white/30 focus:border-gold-500"
              placeholder="Accredian"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="teamSize" className="mb-1.5 block text-sm text-white/70">
              Team size
            </label>
            <select
              id="teamSize"
              name="teamSize"
              required
              value={form.teamSize}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-white focus:border-gold-500"
            >
              <option value="" disabled>
                Select a range
              </option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="200+">200+</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-gold-500 px-6 py-3 font-semibold text-navy-950 hover:bg-gold-400 transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Request a proposal"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm text-green-400">
              Thanks &mdash; we&apos;ll be in touch within two business days.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-400">
              Something went wrong. Please try again in a moment.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
