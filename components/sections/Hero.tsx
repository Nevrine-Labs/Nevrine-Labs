"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DoodleArrow,
  DoodleStar,
  DoodleScribble,
  DoodleSparkle,
  DoodleCircle,
  DoodleSquiggle,
  DoodleBgDecoration,
} from "../doodle/DoodleElements";
import { useGSAP, parallaxFloat, magneticHover } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useGSAP((container) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Stagger the main content in
    tl.fromTo(
      container.querySelector(".hero-subtitle"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      0.3
    )
      .fromTo(
        container.querySelector(".hero-title"),
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)" },
        0.5
      )
      .fromTo(
        container.querySelector(".hero-desc"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.8
      )
      .fromTo(
        container.querySelectorAll(".hero-cta"),
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: "back.out(1.5)" },
        1.0
      )
      .fromTo(
        container.querySelector(".hero-scroll-arrow"),
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.3
      );

    // Floating doodles — stagger in from random positions
    gsap.fromTo(
      container.querySelectorAll(".doodle-float"),
      { scale: 0, opacity: 0, rotation: gsap.utils.random(-30, 30) },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: { each: 0.12, from: "random" },
        delay: 0.6,
        ease: "back.out(2)",
      }
    );

    // Parallax on doodle elements
    parallaxFloat(".doodle-float", container, { speed: 30 });

    // Decoration line draw
    const decoPath = container.querySelector(".hero-deco-line") as SVGPathElement;
    if (decoPath) {
      const len = decoPath.getTotalLength?.() || 200;
      gsap.set(decoPath, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(decoPath, { strokeDashoffset: 0, duration: 1.5, delay: 0.2, ease: "power2.inOut" });
    }

    // Magnetic hover on CTA buttons
    container.querySelectorAll<HTMLElement>(".hero-cta").forEach((btn) => {
      magneticHover(btn, 0.25);
    });

    // Continuous subtle rotation on bg decorations
    gsap.to(container.querySelectorAll(".bg-deco"), {
      rotation: 360,
      duration: 80,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--paper-warm)" }}
    >
      {/* Background decorations */}
      <DoodleBgDecoration className="top-10 left-10 bg-deco" />
      <DoodleBgDecoration className="bottom-10 right-10 rotate-180 bg-deco" />

      {/* Floating doodle decorations */}
      <DoodleStar
        className="absolute top-[15%] left-[8%] doodle-float"
        size={35}
        color="#e07a5f"
        opacity={0.25}
      />
      <DoodleCircle
        className="absolute top-[20%] right-[12%] doodle-float"
        size={50}
        color="#3d85c6"
        opacity={0.2}
      />
      <DoodleScribble
        className="absolute bottom-[25%] left-[5%] doodle-float"
        size={80}
        opacity={0.12}
      />
      <DoodleSquiggle
        className="absolute top-[60%] right-[8%] doodle-float"
        size={100}
        opacity={0.15}
      />
      <DoodleSparkle
        className="absolute top-[30%] right-[30%] doodle-float"
        size={22}
        opacity={0.3}
      />
      <DoodleSparkle
        className="absolute bottom-[35%] left-[25%] doodle-float"
        size={18}
        color="#81b29a"
        opacity={0.25}
      />
      {/* Extra floating doodles for richness */}
      <DoodleStar
        className="absolute top-[70%] left-[15%] doodle-float"
        size={20}
        color="#d4b896"
        opacity={0.2}
      />
      <DoodleCircle
        className="absolute top-[45%] left-[40%] doodle-float"
        size={30}
        color="#81b29a"
        opacity={0.1}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Top decoration line */}
        <svg
          width="200"
          height="20"
          viewBox="0 0 200 20"
          className="mx-auto mb-8"
          fill="none"
        >
          <path
            className="hero-deco-line"
            d="M20 10Q60 2 100 10T180 10"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <p
          className="hero-subtitle handwritten text-xl md:text-2xl mb-4"
          style={{ color: "var(--accent-primary)", opacity: 0 }}
        >
          ✏️ Welcome to
        </p>

        <h1
          className="hero-title handwritten text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
          style={{ color: "var(--ink-dark)", opacity: 0 }}
        >
          Nevrine Labs
        </h1>

        <div className="hero-desc relative inline-block mb-8" style={{ opacity: 0 }}>
          <p
            className="serif text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--ink-medium)" }}
          >
            We <span className="doodle-underline font-semibold">sketch ideas</span> into
            digital reality. A creative agency that brings your vision to life with
            imagination, craft, and code.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <a
            href="#work"
            className="hero-cta group relative px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover-lift"
            style={{
              background: "var(--ink-dark)",
              color: "var(--paper-warm)",
              opacity: 0,
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              See Our Work
              <DoodleArrow size={20} color="var(--paper-warm)" opacity={0.7} />
            </span>
          </a>

          <a
            href="#contact"
            className="hero-cta relative px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover-lift tape-effect"
            style={{
              background: "var(--card-cream)",
              color: "var(--ink-dark)",
              border: "1.5px dashed var(--accent-warm)",
              opacity: 0,
            }}
          >
            Start a Project 🎨
          </a>
        </div>

        {/* Bottom doodle arrow */}
        <div className="hero-scroll-arrow mt-16 flex justify-center" style={{ opacity: 0 }}>
          <a href="#services" className="animate-float block">
            <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
              <path
                d="M15 5V40M5 32L15 43L25 32"
                stroke="var(--ink-light)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom wavy decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "40px" }}
        >
          <path
            d="M0 30Q180 5 360 30T720 30T1080 30T1440 30V60H0Z"
            fill="var(--paper-light)"
          />
        </svg>
      </div>
    </section>
  );
}
