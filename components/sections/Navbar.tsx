"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { DoodleScribble } from "../doodle/DoodleElements";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }
    )
      .fromTo(
        navRef.current.querySelector(".nav-logo"),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        0.3
      )
      .fromTo(
        navRef.current.querySelectorAll(".nav-link"),
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06 },
        0.4
      )
      .fromTo(
        navRef.current.querySelector(".nav-cta"),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)" },
        0.7
      );

    // Hover effects on nav links
    navRef.current.querySelectorAll<HTMLElement>(".nav-link").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { y: -2, duration: 0.2, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { y: 0, duration: 0.3, ease: "elastic.out(1, 0.5)" });
      });
    });
  }, []);

  return (
    <nav
      ref={navRef}
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(245, 241, 232, 0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(42, 37, 32, 0.08)",
        opacity: 0,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="nav-logo flex items-center gap-3 group" style={{ opacity: 0 }}>
          <Image
            src="/logo.png"
            alt="Nevrine Labs logo"
            width={36}
            height={36}
            className="rounded-sm"
          />
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
              className="nav-link relative serif text-sm tracking-wide hover:text-[var(--accent-primary)] transition-colors duration-200"
              style={{ color: "var(--ink-medium)", opacity: 0 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover-lift"
            style={{
              background: "var(--ink-dark)",
              color: "var(--paper-warm)",
              opacity: 0,
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
