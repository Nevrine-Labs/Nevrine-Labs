"use client";

import React from "react";
import { DoodleStar, DoodleHeart } from "../doodle/DoodleElements";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative"
      style={{ background: "var(--paper-warm)" }}
    >
      {/* Wavy divider */}
      <svg
        viewBox="0 0 1440 40"
        fill="none"
        className="w-full"
        preserveAspectRatio="none"
        style={{ height: "30px", transform: "rotate(180deg)" }}
      >
        <path
          d="M0 20Q180 0 360 20T720 20T1080 20T1440 20V40H0Z"
          fill="var(--paper-light)"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <DoodleStar size={24} color="#e07a5f" opacity={0.6} />
              <span
                className="handwritten text-2xl font-bold"
                style={{ color: "var(--ink-dark)" }}
              >
                Nevrine Labs
              </span>
            </div>
            <p
              className="serif text-sm leading-relaxed max-w-sm mb-6"
              style={{ color: "var(--ink-medium)" }}
            >
              Sketching ideas into reality — one pixel, one line, one doodle at
              a time. We believe great digital experiences start with a human
              touch.
            </p>
            <div className="flex gap-5">
              {["Twitter", "GitHub", "Dribbble", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="serif text-xs hover:text-[var(--accent-primary)] transition-colors duration-200"
                  style={{ color: "var(--ink-light)" }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="handwritten text-lg font-bold mb-4"
              style={{ color: "var(--ink-dark)" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="serif text-sm hover:text-[var(--accent-primary)] transition-colors duration-200"
                  style={{ color: "var(--ink-medium)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="handwritten text-lg font-bold mb-4"
              style={{ color: "var(--ink-dark)" }}
            >
              What We Do
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                "Web Development",
                "UI/UX Design",
                "Branding",
                "Mobile Apps",
                "AI Solutions",
              ].map((service) => (
                <span
                  key={service}
                  className="serif text-sm"
                  style={{ color: "var(--ink-medium)" }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px dashed rgba(42, 37, 32, 0.1)" }}
        >
          <p
            className="handwritten text-base text-center md:text-left"
            style={{ color: "var(--ink-light)" }}
          >
            © 2026 Nevrine Labs. Sketched with{" "}
            <DoodleHeart
              className="inline-block align-middle"
              size={16}
              color="#e07a5f"
              opacity={0.6}
            />{" "}
            and lots of ☕
          </p>
          <p
            className="serif text-xs"
            style={{ color: "var(--ink-light)", opacity: 0.6 }}
          >
            All ideas are hand-drawn with care ✏️
          </p>
        </div>
      </div>
    </footer>
  );
}
