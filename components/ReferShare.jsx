"use client";

import { useState } from "react";

export default function ReferShare() {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title: "Accredian Enterprise",
    text: "Thought this could be useful for your team's upskilling — worth a look:",
    url: typeof window !== "undefined" ? window.location.href : "https://enterprise.accredian.com",
  };

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // user cancelled the share sheet — no action needed
      }
    } else {
      handleCopy();
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // clipboard access denied — fail silently, button still shows normal state
    }
  }

  return (
    <section id="refer" className="border-t border-ink-900/10 bg-ink-900/[0.02] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900">
            Know a team that would benefit from this?
          </h3>
          <p className="mt-1 text-sm text-ink-600">
            Refer a colleague or share this page with your L&amp;D team.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
              <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
            </svg>
            Refer &amp; share
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-semibold text-ink-900 hover:border-ink-900/30 transition-colors"
          >
            {copied ? "Link copied ✓" : "Copy link"}
          </button>
        </div>
      </div>
    </section>
  );
}
