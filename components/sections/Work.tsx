"use client";

import React from "react";
import { DoodleCircle, DoodleSquiggle } from "../doodle/DoodleElements";

const projects = [
  {
    title: "EcoTrack Dashboard",
    category: "Web App • UI/UX",
    description: "Real-time sustainability analytics platform with data visualization and AI-driven insights.",
    color: "var(--card-mint)",
    rotation: "-2deg",
    accent: "#81b29a",
  },
  {
    title: "Lumière Brand Identity",
    category: "Branding • Strategy",
    description: "Complete visual identity for a luxury candle brand — logo, packaging, and digital presence.",
    color: "var(--card-lavender)",
    rotation: "1.5deg",
    accent: "#9b72cf",
  },
  {
    title: "PulseChat Mobile",
    category: "Mobile App • AI",
    description: "AI-powered messaging app with smart reply suggestions and mood-based themes.",
    color: "var(--card-peach)",
    rotation: "-1deg",
    accent: "#e07a5f",
  },
  {
    title: "ArtVault Marketplace",
    category: "Full-Stack • E-commerce",
    description: "Digital art marketplace connecting independent artists with collectors worldwide.",
    color: "var(--card-blue)",
    rotation: "2deg",
    accent: "#3d85c6",
  },
  {
    title: "Mindful Moments",
    category: "Mobile App • UX",
    description: "Meditation and journaling app with calming animations and personalized habit tracking.",
    color: "var(--card-yellow)",
    rotation: "-1.5deg",
    accent: "#d4a843",
  },
  {
    title: "CodeScribe Platform",
    category: "Web App • DevTools",
    description: "Collaborative code documentation tool with real-time editing and auto-generated API docs.",
    color: "var(--card-cream)",
    rotation: "1deg",
    accent: "#81b29a",
  },
];

export default function Work() {
  return (
    <section
      id="work"
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
            our portfolio 🎨
          </p>
          <h2
            className="serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--ink-dark)" }}
          >
            Selected <span className="doodle-underline">Work</span>
          </h2>
          <p
            className="serif text-base max-w-xl mx-auto"
            style={{ color: "var(--ink-light)" }}
          >
            A curated collection of projects that showcase our craft and creativity.
          </p>
        </div>

        {/* Scrapboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative group cursor-pointer"
              style={{
                animation: `fadeInUp 0.5s ease-out ${0.1 * index}s both`,
              }}
            >
              <div
                className="note-style hover-lift p-6 transition-all duration-300"
                style={{
                  background: project.color,
                  transform: `rotate(${project.rotation})`,
                  border: `1.5px dashed ${project.accent}33`,
                }}
              >
                {/* Tape effect */}
                <div
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 rounded-sm"
                  style={{
                    background: "rgba(212, 184, 150, 0.5)",
                    transform: `rotate(${parseFloat(project.rotation) > 0 ? "-3" : "2"}deg)`,
                  }}
                />

                {/* Faux image area */}
                <div
                  className="w-full aspect-[4/3] rounded-sm mb-5 relative overflow-hidden flex items-center justify-center"
                  style={{
                    background: `${project.accent}15`,
                    border: `1px solid ${project.accent}25`,
                  }}
                >
                  {/* Doodle sketch placeholder */}
                  <svg width="80" height="60" viewBox="0 0 80 60" fill="none" style={{ opacity: 0.2 }}>
                    <rect x="5" y="5" width="70" height="50" rx="4" stroke={project.accent} strokeWidth="1.5" strokeDasharray="4 3" />
                    <path d="M20 35L30 20L45 30L55 18L65 35" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="25" cy="18" r="5" stroke={project.accent} strokeWidth="1.5" />
                  </svg>

                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `${project.accent}12` }}
                  >
                    <span
                      className="handwritten text-lg px-4 py-2 rounded-full"
                      style={{
                        color: project.accent,
                        background: "rgba(255,255,255,0.8)",
                      }}
                    >
                      View Project →
                    </span>
                  </div>
                </div>

                {/* Text */}
                <p
                  className="handwritten text-sm mb-1"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </p>
                <h3
                  className="serif text-lg font-bold mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="serif text-sm leading-relaxed"
                  style={{ color: "var(--ink-medium)" }}
                >
                  {project.description}
                </p>
              </div>

              {/* Decorative doodle */}
              {index % 3 === 0 && (
                <DoodleCircle
                  className="absolute -bottom-4 -right-4"
                  size={30}
                  opacity={0.15}
                />
              )}
              {index % 3 === 1 && (
                <DoodleSquiggle
                  className="absolute -bottom-2 -left-3"
                  size={50}
                  opacity={0.12}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
