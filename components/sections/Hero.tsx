"use client";

import React from "react";
import {
  DoodleArrow,
  DoodleStar,
  DoodleScribble,
  DoodleSparkle,
  DoodleCircle,
  DoodleSquiggle,
  DoodleBgDecoration,
} from "../doodle/DoodleElements";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--paper-warm)" }}
    >
      {/* Background decorations */}
      <DoodleBgDecoration className="top-10 left-10" />
      <DoodleBgDecoration className="bottom-10 right-10 rotate-180" />

      {/* Floating doodle decorations */}
      <DoodleStar
        className="absolute top-[15%] left-[8%] animate-float"
        size={35}
        color="#e07a5f"
        opacity={0.25}
      />
      <DoodleCircle
        className="absolute top-[20%] right-[12%] animate-float"
        size={50}
        color="#3d85c6"
        opacity={0.2}
        key="circle-1"
      />
      <DoodleScribble
        className="absolute bottom-[25%] left-[5%]"
        size={80}
        opacity={0.12}
      />
      <DoodleSquiggle
        className="absolute top-[60%] right-[8%]"
        size={100}
        opacity={0.15}
      />
      <DoodleSparkle
        className="absolute top-[30%] right-[30%] animate-float"
        size={22}
        opacity={0.3}
        key="sparkle-1"
      />
      <DoodleSparkle
        className="absolute bottom-[35%] left-[25%] animate-float"
        size={18}
        color="#81b29a"
        opacity={0.25}
        key="sparkle-2"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Top decoration line */}
        <svg
          width="200"
          height="20"
          viewBox="0 0 200 20"
          className="mx-auto mb-8 animate-draw-line"
          fill="none"
        >
          <path
            d="M20 10Q60 2 100 10T180 10"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <p
          className="handwritten text-xl md:text-2xl mb-4"
          style={{
            color: "var(--accent-primary)",
            animation: "fadeInUp 0.6s ease-out 0.2s both",
          }}
        >
          ✏️ Welcome to
        </p>

        <h1
          className="handwritten text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
          style={{
            color: "var(--ink-dark)",
            animation: "fadeInUp 0.6s ease-out 0.4s both",
          }}
        >
          Nevrine Labs
        </h1>

        <div className="relative inline-block mb-8">
          <p
            className="serif text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "var(--ink-medium)",
              animation: "fadeInUp 0.6s ease-out 0.6s both",
            }}
          >
            We <span className="doodle-underline font-semibold">sketch ideas</span> into
            digital reality. A creative agency that brings your vision to life with
            imagination, craft, and code.
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          style={{ animation: "fadeInUp 0.6s ease-out 0.8s both" }}
        >
          <a
            href="#work"
            className="group relative px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover-lift"
            style={{
              background: "var(--ink-dark)",
              color: "var(--paper-warm)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              See Our Work
              <DoodleArrow size={20} color="var(--paper-warm)" opacity={0.7} />
            </span>
          </a>

          <a
            href="#contact"
            className="relative px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover-lift tape-effect"
            style={{
              background: "var(--card-cream)",
              color: "var(--ink-dark)",
              border: "1.5px dashed var(--accent-warm)",
            }}
          >
            Start a Project 🎨
          </a>
        </div>

        {/* Bottom doodle arrow */}
        <div
          className="mt-16 flex justify-center"
          style={{ animation: "fadeIn 1s ease-out 1.2s both" }}
        >
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
