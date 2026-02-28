"use client";

import React from "react";
import gsap from "gsap";
import {
  DoodleStar,
  DoodleHeart,
  DoodleSparkle,
  DoodleCheckmark,
} from "@/components/doodle/DoodleElements";
import { useGSAP } from "@/lib/animations";

export default function ThanksPage() {
  const containerRef = useGSAP((container) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      container.querySelector(".thanks-icon"),
      { scale: 0, rotation: -30 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" },
      0.2
    )
      .fromTo(
        container.querySelector(".thanks-title"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.5
      )
      .fromTo(
        container.querySelector(".thanks-desc"),
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.7
      )
      .fromTo(
        container.querySelector(".thanks-cta"),
        { y: 15, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
        0.9
      );

    gsap.fromTo(
      container.querySelectorAll(".float-deco"),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: { each: 0.1, from: "random" },
        delay: 0.5,
        ease: "back.out(2)",
      }
    );
  });

  return (
    <main
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--paper-warm)" }}
    >
      {/* Floating decorations */}
      <DoodleStar className="absolute top-[15%] left-[10%] float-deco" size={30} color="#e07a5f" opacity={0.2} />
      <DoodleHeart className="absolute top-[20%] right-[15%] float-deco" size={25} color="#e07a5f" opacity={0.2} />
      <DoodleSparkle className="absolute bottom-[25%] left-[12%] float-deco" size={20} color="#d4a843" opacity={0.2} />
      <DoodleStar className="absolute bottom-[20%] right-[10%] float-deco" size={22} color="#81b29a" opacity={0.2} />
      <DoodleSparkle className="absolute top-[40%] right-[8%] float-deco" size={18} opacity={0.15} />

      <div className="text-center px-6 max-w-lg mx-auto">
        {/* Checkmark icon */}
        <div className="thanks-icon inline-block mb-8" style={{ scale: 0 }}>
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto"
            style={{
              background: "var(--card-mint)",
              border: "3px dashed var(--accent-tertiary)",
            }}
          >
            <DoodleCheckmark size={48} color="#81b29a" opacity={0.8} />
          </div>
        </div>

        <h1
          className="thanks-title handwritten text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          style={{ color: "var(--ink-dark)", opacity: 0 }}
        >
          Message Sent! ✨
        </h1>

        <div className="thanks-desc" style={{ opacity: 0 }}>
          <p
            className="serif text-base sm:text-lg leading-relaxed mb-3"
            style={{ color: "var(--ink-medium)" }}
          >
            Thanks for reaching out to <strong>Nevrine Labs</strong>!
          </p>
          <p
            className="serif text-sm sm:text-base leading-relaxed mb-8"
            style={{ color: "var(--ink-light)" }}
          >
            We&apos;ve received your note and will get back to you within 24 hours.
            In the meantime, grab a ☕ and we&apos;ll start sketching ideas!
          </p>

          {/* Doodle divider */}
          <svg width="120" height="8" viewBox="0 0 120 8" fill="none" className="mx-auto mb-8" style={{ opacity: 0.25 }}>
            <path d="M5 4C20 1 35 7 50 4C65 1 80 7 95 4C105 2 115 5 118 4" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <a
          href="/"
          className="thanks-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover-lift tape-effect"
          style={{
            background: "var(--ink-dark)",
            color: "var(--paper-warm)",
            opacity: 0,
          }}
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
