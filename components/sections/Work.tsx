"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DoodleCircle, DoodleSquiggle } from "../doodle/DoodleElements";
import { useGSAP, headingReveal } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FocusEdu",
    category: "Web App • EdTech",
    description: "A modern educational platform designed to help students stay focused, track progress, and master their learning goals.",
    color: "var(--card-mint)",
    rotation: "-2deg",
    accent: "#81b29a",
    comingSoon: false,
    link: "https://focus-edu-delta.vercel.app",
  },
  {
    title: "GoldenHour",
    category: "Web App • Smart City",
    description: "An AI-powered green corridor system for ambulances that optimizes traffic signals in real-time to ensure faster emergency response.",
    color: "var(--card-yellow)",
    rotation: "1.5deg",
    accent: "#d4a843",
    comingSoon: false,
    link: "",
  },
  {
    title: "Housely",
    category: "Web App • Real Estate",
    description: "A smart real estate platform that simplifies property search, listings, and home buying with an intuitive interface.",
    color: "var(--card-peach)",
    rotation: "-1deg",
    accent: "#e07a5f",
    comingSoon: false,
    link: "",
  },
  {
    title: "Coming Soon",
    category: "✨ In Progress",
    description: "Something exciting is brewing! We're working on a brand new project that we can't wait to share with you.",
    color: "var(--card-lavender)",
    rotation: "2deg",
    accent: "#9b72cf",
    comingSoon: true,
    link: "",
  },
  {
    title: "Coming Soon",
    category: "✨ In Progress",
    description: "Another creative idea is taking shape on our sketchpad. Stay tuned for the big reveal!",
    color: "var(--card-blue)",
    rotation: "-1.5deg",
    accent: "#3d85c6",
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    category: "✨ In Progress",
    description: "We're sketching, coding, and perfecting our next masterpiece. Follow us to be the first to know!",
    color: "var(--card-cream)",
    rotation: "1deg",
    accent: "#81b29a",
    comingSoon: true,
  },
];

export default function Work() {
  const containerRef = useGSAP((container) => {
    headingReveal(".section-header", container);

    // Cards reveal with scrapboard-style — cascade from different angles
    gsap.fromTo(
      container.querySelectorAll(".work-card"),
      {
        y: 80,
        opacity: 0,
        rotateZ: (i: number) => (i % 2 === 0 ? -6 : 6),
        scale: 0.85,
      },
      {
        y: 0,
        opacity: 1,
        rotateZ: (i: number) => parseFloat(projects[i % projects.length].rotation),
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.querySelector(".work-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Tape strips — slide in from top
    gsap.fromTo(
      container.querySelectorAll(".tape-strip"),
      { y: -20, opacity: 0, scaleX: 0 },
      {
        y: 0,
        opacity: 1,
        scaleX: 1,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.querySelector(".work-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Hover glow effect on project cards
    container.querySelectorAll<HTMLElement>(".work-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          boxShadow: "6px 10px 30px rgba(42, 37, 32, 0.12)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "2px 3px 8px rgba(42, 37, 32, 0.06)",
          duration: 0.4,
          ease: "elastic.out(1, 0.6)",
        });
      });
    });

    // Doodle decorations — scale in
    gsap.fromTo(
      container.querySelectorAll(".work-deco"),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.8,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: container.querySelector(".work-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative py-16 sm:py-24 md:py-32"
      style={{ background: "var(--paper-warm)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="section-header text-center mb-10 sm:mb-16" style={{ opacity: 0 }}>
          <p
            className="handwritten text-xl mb-2"
            style={{ color: "var(--accent-primary)" }}
          >
            our portfolio 🎨
          </p>
          <h2
            className="serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
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
        <div className="work-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="relative group cursor-pointer"
            >
              <div
                className="work-card note-style p-4 sm:p-6 transition-colors duration-300"
                style={{
                  background: project.color,
                  opacity: 0,
                  border: `1.5px dashed ${project.accent}33`,
                }}
              >
                {/* Tape effect */}
                <div
                  className="tape-strip absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 rounded-sm"
                  style={{
                    background: "rgba(212, 184, 150, 0.5)",
                    transform: `translateX(-50%) rotate(${parseFloat(project.rotation) > 0 ? "-3" : "2"}deg)`,
                    opacity: 0,
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
                  <svg width="80" height="60" viewBox="0 0 80 60" fill="none" style={{ opacity: 0.2 }}>
                    <rect x="5" y="5" width="70" height="50" rx="4" stroke={project.accent} strokeWidth="1.5" strokeDasharray="4 3" />
                    <path d="M20 35L30 20L45 30L55 18L65 35" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="25" cy="18" r="5" stroke={project.accent} strokeWidth="1.5" />
                  </svg>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  ) : (
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
                        {project.comingSoon ? "Coming Soon 🔒" : "View Project →"}
                      </span>
                    </div>
                  )}
                </div>

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

              {index % 3 === 0 && (
                <DoodleCircle
                  className="work-deco absolute -bottom-4 -right-4"
                  size={30}
                  opacity={0.15}
                />
              )}
              {index % 3 === 1 && (
                <DoodleSquiggle
                  className="work-deco absolute -bottom-2 -left-3"
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
