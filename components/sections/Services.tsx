"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DoodleCheckmark,
  DoodleStar,
  DoodleLightbulb,
  DoodleRocket,
  DoodleHeart,
  DoodleSparkle,
} from "../doodle/DoodleElements";
import { useGSAP, headingReveal, staggerReveal } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description:
      "Crafting fast, responsive, and beautiful websites that feel alive. From landing pages to full-stack platforms.",
    icon: DoodleRocket,
    color: "var(--card-blue)",
    iconColor: "#3d85c6",
    emoji: "🌐",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces that users love. Every pixel placed with purpose and personality.",
    icon: DoodleStar,
    color: "var(--card-peach)",
    iconColor: "#e07a5f",
    emoji: "🎨",
  },
  {
    title: "Branding",
    description:
      "Building memorable brand identities that tell your story. Logos, colors, and visual systems that stick.",
    icon: DoodleHeart,
    color: "var(--card-lavender)",
    iconColor: "#9b72cf",
    emoji: "✨",
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps that feel right at home on every device. Smooth, fast, delightful.",
    icon: DoodleLightbulb,
    color: "var(--card-mint)",
    iconColor: "#81b29a",
    emoji: "📱",
  },
  {
    title: "AI Solutions",
    description:
      "Integrating intelligent features that make your product smarter. From chatbots to recommendation engines.",
    icon: DoodleSparkle,
    color: "var(--card-yellow)",
    iconColor: "#d4a843",
    emoji: "🤖",
  },
  {
    title: "Digital Strategy",
    description:
      "Planning the path from idea to launch. SEO, analytics, growth — we map it all out for you.",
    icon: DoodleCheckmark,
    color: "var(--card-cream)",
    iconColor: "#81b29a",
    emoji: "📐",
  },
];

export default function Services() {
  const containerRef = useGSAP((container) => {
    // Header reveal
    headingReveal(".section-header", container);

    // Cards with stagger + rotation
    gsap.fromTo(
      container.querySelectorAll(".service-card"),
      {
        y: 60,
        opacity: 0,
        rotateZ: (i: number) => (i % 2 === 0 ? -3 : 3),
        scale: 0.92,
      },
      {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.querySelector(".services-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Card icons — pop in after cards
    gsap.fromTo(
      container.querySelectorAll(".service-icon"),
      { scale: 0, rotation: -20 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.3,
        ease: "back.out(2.5)",
        scrollTrigger: {
          trigger: container.querySelector(".services-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Bottom decoration draw
    const decoArrow = container.querySelector(".deco-arrow path") as SVGPathElement;
    if (decoArrow) {
      const len = decoArrow.getTotalLength?.() || 200;
      gsap.set(decoArrow, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(decoArrow, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container.querySelector(".deco-arrow"),
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }
  });

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative py-24 md:py-32"
      style={{ background: "var(--paper-light)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="section-header text-center mb-16" style={{ opacity: 0 }}>
          <p
            className="handwritten text-xl mb-2"
            style={{ color: "var(--accent-primary)" }}
          >
            what we do ✏️
          </p>
          <h2
            className="serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--ink-dark)" }}
          >
            Our <span className="doodle-underline">Services</span>
          </h2>
          <p
            className="serif text-base max-w-xl mx-auto"
            style={{ color: "var(--ink-light)" }}
          >
            From first sketch to final pixel — we handle every stage of your digital journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="service-card note-style hover-tilt corner-fold p-8 relative"
                style={{
                  background: service.color,
                  opacity: 0,
                }}
              >
                {/* Pin dot */}
                <div
                  className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-sm"
                  style={{ background: "var(--accent-primary)" }}
                />

                {/* Icon */}
                <div className="service-icon mb-5 flex items-center gap-3" style={{ scale: 0 }}>
                  <span className="text-3xl">{service.emoji}</span>
                  <IconComponent
                    size={32}
                    color={service.iconColor}
                    opacity={0.5}
                  />
                </div>

                <h3
                  className="handwritten text-2xl font-bold mb-3"
                  style={{ color: "var(--ink-dark)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="serif text-sm leading-relaxed"
                  style={{ color: "var(--ink-medium)" }}
                >
                  {service.description}
                </p>

                {/* Bottom doodle accent */}
                <div className="mt-4 opacity-30">
                  <svg width="60" height="6" viewBox="0 0 60 6" fill="none">
                    <path
                      d="M2 4C10 1 20 5 30 3C40 1 50 5 58 3"
                      stroke={service.iconColor}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background doodle decoration */}
      <svg
        className="deco-arrow absolute bottom-8 right-8 pointer-events-none"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        style={{ opacity: 0.1 }}
      >
        <path
          d="M20 100C20 50 50 20 100 20M90 15L100 20L92 28"
          stroke="var(--ink-dark)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 4"
        />
      </svg>
    </section>
  );
}
