"use client";

import React from "react";
import {
  DoodleHeart,
  DoodleStar,
  DoodleCheckmark,
  DoodleScribble,
  DoodleSparkle,
} from "../doodle/DoodleElements";

const values = [
  {
    icon: DoodleStar,
    title: "Craftsmanship",
    note: "Every detail matters",
    color: "#e07a5f",
  },
  {
    icon: DoodleHeart,
    title: "Passion",
    note: "We love what we build",
    color: "#e07a5f",
  },
  {
    icon: DoodleCheckmark,
    title: "Quality",
    note: "No shortcuts, ever",
    color: "#81b29a",
  },
  {
    icon: DoodleSparkle,
    title: "Innovation",
    note: "Always exploring the new",
    color: "#d4a843",
  },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "We listen, research, and understand your goals." },
  { step: "02", title: "Sketch", desc: "Ideas take shape on paper (and whiteboards)." },
  { step: "03", title: "Design", desc: "Pixels meet purpose in beautiful interfaces." },
  { step: "04", title: "Build", desc: "Clean code brings designs to life." },
  { step: "05", title: "Launch", desc: "We ship, celebrate, and keep improving." },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      style={{ background: "var(--paper-light)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="handwritten text-xl mb-2"
            style={{ color: "var(--accent-primary)" }}
          >
            who we are 💡
          </p>
          <h2
            className="serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--ink-dark)" }}
          >
            About <span className="doodle-underline">Nevrine Labs</span>
          </h2>
        </div>

        {/* About content — notebook style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Story */}
          <div
            className="ruled-lines p-8 rounded-lg relative"
            style={{
              background: "var(--paper-white)",
              border: "1px solid rgba(42, 37, 32, 0.06)",
            }}
          >
            {/* Red margin line */}
            <div
              className="absolute top-0 bottom-0 left-12"
              style={{
                width: "1px",
                background: "rgba(224, 122, 95, 0.2)",
              }}
            />

            <div className="pl-8">
              <h3
                className="handwritten text-3xl font-bold mb-4"
                style={{ color: "var(--ink-dark)" }}
              >
                Our Story ✏️
              </h3>
              <p
                className="serif text-base leading-[2] mb-4"
                style={{ color: "var(--ink-medium)" }}
              >
                Nevrine Labs was born from a simple belief: digital experiences should feel
                human. In a world of templates and cookie-cutter designs, we chose the pen
                over the stamp.
              </p>
              <p
                className="serif text-base leading-[2] mb-4"
                style={{ color: "var(--ink-medium)" }}
              >
                We&apos;re a team of designers, developers, and creative thinkers who
                obsess over the little things — a perfect curve, a smooth animation, a
                layout that just <em>feels right</em>.
              </p>
              <p
                className="margin-note mt-4"
              >
                — founded with 🖊 and ☕
              </p>
            </div>

            <DoodleScribble
              className="absolute bottom-4 right-4"
              size={60}
              opacity={0.1}
            />
          </div>

          {/* Right: Values */}
          <div className="flex flex-col gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="note-style hover-lift flex items-start gap-4 p-5"
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both`,
                  }}
                >
                  <Icon size={28} color={val.color} opacity={0.6} />
                  <div>
                    <h4
                      className="handwritten text-xl font-bold"
                      style={{ color: "var(--ink-dark)" }}
                    >
                      {val.title}
                    </h4>
                    <p
                      className="serif text-sm"
                      style={{ color: "var(--ink-light)" }}
                    >
                      {val.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Creative Process Timeline */}
        <div className="mt-8">
          <h3
            className="handwritten text-3xl font-bold text-center mb-12"
            style={{ color: "var(--ink-dark)" }}
          >
            Our Creative Process 🔄
          </h3>

          <div className="relative">
            {/* Hand-drawn connecting line */}
            <svg
              className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-4 pointer-events-none hidden md:block"
              viewBox="0 0 16 500"
              preserveAspectRatio="none"
              fill="none"
              style={{ opacity: 0.15 }}
            >
              <path
                d="M8 0C10 50 6 100 8 150C10 200 6 250 8 300C10 350 6 400 8 450C10 480 8 500 8 500"
                stroke="var(--ink-dark)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 4"
              />
            </svg>

            <div className="flex flex-col gap-8">
              {processSteps.map((step, i) => (
                <div
                  key={step.step}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${0.15 * i}s both`,
                  }}
                >
                  <div
                    className={`flex-1 note-style p-6 hover-tilt ${i % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    style={{
                      background:
                        i % 2 === 0
                          ? "var(--card-cream)"
                          : "var(--card-blue)",
                    }}
                  >
                    <span
                      className="handwritten text-4xl font-bold"
                      style={{ color: "var(--accent-primary)", opacity: 0.3 }}
                    >
                      {step.step}
                    </span>
                    <h4
                      className="handwritten text-2xl font-bold mt-1"
                      style={{ color: "var(--ink-dark)" }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="serif text-sm mt-1"
                      style={{ color: "var(--ink-medium)" }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div
                    className="hidden md:block w-4 h-4 rounded-full shrink-0 z-10"
                    style={{
                      background: "var(--accent-primary)",
                      boxShadow: "0 0 0 4px var(--paper-light)",
                    }}
                  />

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
