"use client";

import React, { useState } from "react";
import { DoodleScribble, DoodleStar } from "../doodle/DoodleElements";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(245, 241, 232, 0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(42, 37, 32, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <DoodleStar size={28} color="#e07a5f" opacity={0.7} />
          <span
            className="handwritten text-3xl font-bold tracking-tight"
            style={{ color: "var(--ink-dark)" }}
          >
            Nevrine Labs
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative serif text-sm tracking-wide hover:text-[var(--accent-primary)] transition-colors duration-200"
              style={{ color: "var(--ink-medium)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover-lift"
            style={{
              background: "var(--ink-dark)",
              color: "var(--paper-warm)",
            }}
          >
            Let&apos;s Talk ✏️
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 rounded transition-all duration-300"
            style={{
              background: "var(--ink-dark)",
              transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 rounded transition-all duration-300"
            style={{
              background: "var(--ink-dark)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 rounded transition-all duration-300"
            style={{
              background: "var(--ink-dark)",
              transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "400px" : "0",
          background: "rgba(245, 241, 232, 0.98)",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <DoodleScribble className="mx-auto" color="#e07a5f" opacity={0.2} size={100} />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="handwritten text-xl py-2 text-center hover:text-[var(--accent-primary)] transition-colors"
              style={{ color: "var(--ink-dark)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mx-auto px-6 py-3 rounded-full text-sm font-medium mt-2"
            style={{
              background: "var(--ink-dark)",
              color: "var(--paper-warm)",
            }}
          >
            Let&apos;s Talk ✏️
          </a>
        </div>
      </div>
    </nav>
  );
}
