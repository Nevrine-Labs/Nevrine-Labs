"use client";

import React from "react";
import gsap from "gsap";
import {
  DoodleStar,
  DoodleScribble,
  DoodleSparkle,
} from "@/components/doodle/DoodleElements";
import { useGSAP } from "@/lib/animations";

export default function NotFound() {
  const containerRef = useGSAP((container) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      container.querySelector(".error-number"),
      { scale: 0.5, opacity: 0, rotation: -8 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" },
      0.2
    )
      .fromTo(
        container.querySelector(".error-title"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.6
      )
      .fromTo(
        container.querySelector(".error-desc"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.8
      )
      .fromTo(
        container.querySelector(".error-cta"),
        { y: 15, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
        1.0
      );

    gsap.fromTo(
      container.querySelectorAll(".float-deco"),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: { each: 0.12, from: "random" },
        delay: 0.4,
        ease: "back.out(2)",
      }
    );

    // Continuous wobble on 404
    gsap.to(container.querySelector(".error-number"), {
      rotation: 2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <main
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--paper-warm)" }}
    >
      {/* Floating decorations */}
      <DoodleStar className="absolute top-[12%] left-[8%] float-deco" size={28} color="#e07a5f" opacity={0.2} />
      <DoodleScribble className="absolute top-[18%] right-[10%] float-deco" size={60} opacity={0.1} />
      <DoodleSparkle className="absolute bottom-[22%] left-[15%] float-deco" size={22} color="#d4a843" opacity={0.2} />
      <DoodleStar className="absolute bottom-[18%] right-[12%] float-deco" size={20} color="#81b29a" opacity={0.15} />
      <DoodleSparkle className="absolute top-[50%] left-[6%] float-deco" size={16} opacity={0.15} />

      <div className="text-center px-6 max-w-lg mx-auto">
        {/* 404 number */}
        <div
          className="error-number inline-block mb-6 relative"
          style={{ opacity: 0 }}
        >
          <span
            className="handwritten text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none"
            style={{ color: "var(--accent-primary)", opacity: 0.15 }}
          >
            404
          </span>
          {/* Doodle cross-out */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 100"
            fill="none"
            style={{ opacity: 0.4 }}
          >
            <path
              d="M30 70 C60 25, 100 85, 170 30"
              stroke="var(--accent-primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
          </svg>
        </div>

        <h1
          className="error-title handwritten text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--ink-dark)", opacity: 0 }}
        >
          Oops, page not found! 🔍
        </h1>

        <div className="error-desc" style={{ opacity: 0 }}>
          <p
            className="serif text-base sm:text-lg leading-relaxed mb-3"
            style={{ color: "var(--ink-medium)" }}
          >
            Looks like this page wandered off the notebook.
          </p>
          <p
            className="serif text-sm sm:text-base leading-relaxed mb-8"
            style={{ color: "var(--ink-light)" }}
          >
            Don&apos;t worry — our doodles are still on the homepage!
          </p>

          {/* Doodle divider */}
          <svg width="100" height="8" viewBox="0 0 100 8" fill="none" className="mx-auto mb-8" style={{ opacity: 0.2 }}>
            <path d="M5 4C18 1 30 7 44 4C58 1 70 7 84 4C92 2 96 5 98 4" stroke="var(--ink-dark)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <a
          href="/"
          className="error-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover-lift tape-effect"
          style={{
            background: "var(--ink-dark)",
            color: "var(--paper-warm)",
            opacity: 0,
          }}
        >
          ← Take Me Home
        </a>
      </div>
    </main>
  );
}
