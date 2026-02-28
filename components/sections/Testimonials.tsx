"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DoodleHeart, DoodleStar } from "../doodle/DoodleElements";
import { useGSAP, headingReveal } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useGSAP((container) => {
    headingReveal(".section-header", container);

    // Sticky notes — drop in from above with slight bounce + rotation
    gsap.fromTo(
      container.querySelectorAll(".testimonial-card"),
      {
        y: -80,
        opacity: 0,
        rotation: (i: number) => gsap.utils.random(-8, 8),
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        rotation: (i: number) => parseFloat(testimonials[i % testimonials.length].rotation),
        scale: 1,
        duration: 0.7,
        stagger: { each: 0.1, from: "random" },
        ease: "bounce.out",
        scrollTrigger: {
          trigger: container.querySelector(".testimonials-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Pins pop in after cards land
    gsap.fromTo(
      container.querySelectorAll(".pin-dot"),
      { scale: 0 },
      {
        scale: 1,
        duration: 0.3,
        stagger: { each: 0.08, from: "random" },
        delay: 0.6,
        ease: "back.out(4)",
        scrollTrigger: {
          trigger: container.querySelector(".testimonials-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Quote marks — fade in slowly
    gsap.fromTo(
      container.querySelectorAll(".quote-mark"),
      { y: -15, opacity: 0 },
      {
        y: 0,
        opacity: 0.25,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.querySelector(".testimonials-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Bottom decorations
    gsap.fromTo(
      container.querySelectorAll(".bottom-deco"),
      { y: 20, opacity: 0, scale: 0 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: container.querySelector(".testimonials-grid"),
          start: "bottom 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Hover effect — slight wiggle
    container.querySelectorAll<HTMLElement>(".testimonial-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          rotation: 0,
          scale: 1.04,
          boxShadow: "5px 8px 25px rgba(42, 37, 32, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        const idx = Array.from(container.querySelectorAll(".testimonial-card")).indexOf(card);
        gsap.to(card, {
          rotation: parseFloat(testimonials[idx % testimonials.length].rotation),
          scale: 1,
          boxShadow: "2px 3px 8px rgba(42, 37, 32, 0.06)",
          duration: 0.4,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });
  });

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-24 md:py-32"
      style={{ background: "var(--paper-warm)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="section-header text-center mb-16" style={{ opacity: 0 }}>
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

        {/* Testimonials grid */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative"
            >
              <div
                className="testimonial-card note-style p-7 relative cursor-default"
                style={{
                  background: t.color,
                  opacity: 0,
                }}
              >
                {/* Pin dot */}
                <div
                  className="pin-dot absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
                  style={{
                    background: "var(--accent-primary)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    scale: 0,
                  }}
                />

                {/* Quote mark */}
                <span
                  className="quote-mark handwritten text-5xl leading-none block mb-2"
                  style={{ color: "var(--accent-primary)", opacity: 0 }}
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
            className="bottom-deco animate-float"
            size={20}
            opacity={0.2}
          />
          <DoodleHeart
            className="bottom-deco animate-float"
            size={18}
            opacity={0.2}
          />
          <DoodleStar
            className="bottom-deco animate-float"
            size={16}
            opacity={0.15}
          />
        </div>
      </div>
    </section>
  );
}
