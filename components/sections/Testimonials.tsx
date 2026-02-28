"use client";

import React from "react";
import { DoodleHeart, DoodleStar } from "../doodle/DoodleElements";

const testimonials = [
  {
    quote:
      "Nevrine Labs turned our messy ideas into a beautiful, intuitive platform. Their work feels like magic — effortless from the user's perspective, but deeply thoughtful underneath.",
    author: "Sarah Kim",
    role: "CEO, EcoTrack",
    color: "var(--card-peach)",
    rotation: "-1.5deg",
  },
  {
    quote:
      "Working with them felt like collaborating with friends who happen to be incredibly talented. They really listened and delivered beyond what we imagined.",
    author: "Marcus Chen",
    role: "Founder, ArtVault",
    color: "var(--card-mint)",
    rotation: "1deg",
  },
  {
    quote:
      "The brand identity they created for us is perfect. It captures exactly who we are — playful yet professional, bold yet approachable.",
    author: "Priya Patel",
    role: "Creative Director, Lumière",
    color: "var(--card-lavender)",
    rotation: "-0.5deg",
  },
  {
    quote:
      "Our app went from concept to App Store in 3 months. The doodle-style onboarding they designed gets compliments from every single user.",
    author: "Jake Wilson",
    role: "CTO, PulseChat",
    color: "var(--card-yellow)",
    rotation: "1.5deg",
  },
  {
    quote:
      "I've worked with many agencies, but Nevrine Labs is special. They don't just build — they care. Every interaction felt genuine and every delivery was outstanding.",
    author: "Emma Rodriguez",
    role: "VP Product, Mindful Inc",
    color: "var(--card-blue)",
    rotation: "-1deg",
  },
  {
    quote:
      "The documentation platform they built transformed how our team works. Clean, intuitive, and surprisingly fun to use. That's the Nevrine Labs touch.",
    author: "David Park",
    role: "Engineering Lead, CodeScribe",
    color: "var(--card-cream)",
    rotation: "0.5deg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32"
      style={{ background: "var(--paper-warm)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="handwritten text-xl mb-2"
            style={{ color: "var(--accent-primary)" }}
          >
            kind words 💬
          </p>
          <h2
            className="serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--ink-dark)" }}
          >
            What Our <span className="doodle-underline">Clients</span> Say
          </h2>
        </div>

        {/* Testimonials — sticky note grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${0.08 * i}s both`,
              }}
            >
              <div
                className="note-style hover-lift p-7 relative"
                style={{
                  background: t.color,
                  transform: `rotate(${t.rotation})`,
                  transition: "transform 0.3s ease",
                }}
              >
                {/* Pin dot */}
                <div
                  className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
                  style={{
                    background: "var(--accent-primary)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                />

                {/* Quote mark */}
                <span
                  className="handwritten text-5xl leading-none block mb-2"
                  style={{ color: "var(--accent-primary)", opacity: 0.25 }}
                >
                  &ldquo;
                </span>

                <p
                  className="serif text-sm leading-relaxed mb-5 italic"
                  style={{ color: "var(--ink-medium)" }}
                >
                  {t.quote}
                </p>

                {/* Divider squiggle */}
                <svg
                  width="50"
                  height="6"
                  viewBox="0 0 50 6"
                  fill="none"
                  className="mb-3"
                  style={{ opacity: 0.25 }}
                >
                  <path
                    d="M2 3C10 1 18 5 26 3C34 1 42 5 48 3"
                    stroke="var(--ink-dark)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="flex items-center gap-2">
                  <DoodleHeart size={16} opacity={0.4} />
                  <div>
                    <p
                      className="handwritten text-base font-bold"
                      style={{ color: "var(--ink-dark)" }}
                    >
                      {t.author}
                    </p>
                    <p
                      className="serif text-xs"
                      style={{ color: "var(--ink-light)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating decoration */}
        <div className="flex justify-center mt-12 gap-4">
          <DoodleStar
            className="animate-float"
            size={20}
            opacity={0.2}
          />
          <DoodleHeart
            className="animate-float"
            size={18}
            opacity={0.2}
          />
          <DoodleStar
            className="animate-float"
            size={16}
            opacity={0.15}
          />
        </div>
      </div>
    </section>
  );
}
