"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DoodleArrow,
  DoodleScribble,
  DoodleSparkle,
} from "../doodle/DoodleElements";
import { useGSAP, headingReveal, magneticHover } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useGSAP((container) => {
    headingReveal(".section-header", container);

    // Form slides in from left
    gsap.fromTo(
      container.querySelector(".contact-form"),
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.querySelector(".contact-grid"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Form fields — stagger reveal
    gsap.fromTo(
      container.querySelectorAll(".form-field"),
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.querySelector(".contact-form"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Info cards — stagger from right
    gsap.fromTo(
      container.querySelectorAll(".info-card"),
      { x: 40, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.querySelector(".contact-sidebar"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Social card
    gsap.fromTo(
      container.querySelector(".social-card"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.querySelector(".contact-sidebar"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Magnetic hover on submit button
    const submitBtn = container.querySelector<HTMLElement>(".submit-btn");
    if (submitBtn) magneticHover(submitBtn, 0.2);

    // Focus animations on form inputs
    container.querySelectorAll<HTMLElement>("input, textarea, select").forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(input, {
          borderColor: "rgba(224, 122, 95, 0.4)",
          boxShadow: "0 0 0 3px rgba(224, 122, 95, 0.08)",
          scale: 1.01,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      input.addEventListener("blur", () => {
        gsap.to(input, {
          borderColor: "rgba(42, 37, 32, 0.12)",
          boxShadow: "none",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  });

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-24 md:py-32"
      style={{ background: "var(--paper-light)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="section-header text-center mb-16" style={{ opacity: 0 }}>
          <p
            className="handwritten text-xl mb-2"
            style={{ color: "var(--accent-primary)" }}
          >
            let&apos;s connect ✉️
          </p>
          <h2
            className="serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--ink-dark)" }}
          >
            Start a <span className="doodle-underline">Conversation</span>
          </h2>
          <p
            className="serif text-base max-w-xl mx-auto"
            style={{ color: "var(--ink-light)" }}
          >
            Got a project in mind? Drop us a note and we&apos;ll get back to you faster than you can say &ldquo;doodle.&rdquo;
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div
            className="contact-form lg:col-span-3 ruled-lines rounded-lg p-8 relative"
            style={{
              background: "var(--paper-white)",
              border: "1px solid rgba(42, 37, 32, 0.06)",
              opacity: 0,
            }}
          >
            <div
              className="absolute top-0 bottom-0 left-10"
              style={{
                width: "1px",
                background: "rgba(224, 122, 95, 0.15)",
              }}
            />

            <form
              action="https://formsubmit.co/nevrinelabs@gmail.com"
              method="POST"
              className="pl-6 flex flex-col gap-6"
            >
              {/* FormSubmit config — no captcha, custom subject, nice template */}
              <input type="hidden" name="_subject" value="🎨 New Project Inquiry — Nevrine Labs" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Honeypot anti-spam */}
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="form-field" style={{ opacity: 0 }}>
                <label
                  className="handwritten text-lg block mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  Your Name ✏️
                </label>
                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-4 py-3 rounded-lg serif text-sm transition-all duration-200 focus:outline-none"
                  style={{
                    background: "rgba(245, 241, 232, 0.5)",
                    border: "1.5px dashed rgba(42, 37, 32, 0.12)",
                    color: "var(--ink-dark)",
                  }}
                  id="contact-name"
                />
              </div>

              <div className="form-field" style={{ opacity: 0 }}>
                <label
                  className="handwritten text-lg block mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  Email Address 📧
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 rounded-lg serif text-sm transition-all duration-200 focus:outline-none"
                  style={{
                    background: "rgba(245, 241, 232, 0.5)",
                    border: "1.5px dashed rgba(42, 37, 32, 0.12)",
                    color: "var(--ink-dark)",
                  }}
                  id="contact-email"
                />
              </div>

              <div className="form-field" style={{ opacity: 0 }}>
                <label
                  className="handwritten text-lg block mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  Project Type 🎨
                </label>
                <select
                  name="Project Type"
                  required
                  className="w-full px-4 py-3 rounded-lg serif text-sm transition-all duration-200 focus:outline-none appearance-none cursor-pointer"
                  style={{
                    background: "rgba(245, 241, 232, 0.5)",
                    border: "1.5px dashed rgba(42, 37, 32, 0.12)",
                    color: "var(--ink-medium)",
                  }}
                  id="contact-project-type"
                >
                  <option value="">Pick one...</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="AI Solution">AI Solution</option>
                  <option value="Something Else">Something Else ✨</option>
                </select>
              </div>

              <div className="form-field" style={{ opacity: 0 }}>
                <label
                  className="handwritten text-lg block mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  Your Message 💬
                </label>
                <textarea
                  name="Message"
                  required
                  rows={5}
                  placeholder="Tell us about your project, timeline, and any fun details..."
                  className="w-full px-4 py-3 rounded-lg serif text-sm transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    background: "rgba(245, 241, 232, 0.5)",
                    border: "1.5px dashed rgba(42, 37, 32, 0.12)",
                    color: "var(--ink-dark)",
                  }}
                  id="contact-message"
                />
              </div>

              <button
                type="submit"
                className=" cursor-pointer submit-btn relative self-start px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover-lift tape-effect form-field"
                style={{
                  background: "var(--ink-dark)",
                  color: "var(--paper-warm)",
                  opacity: 0,
                }}
              >
                <span className="flex items-center gap-2 ">
                  Send It Off
                  <DoodleArrow size={20} color="var(--paper-warm)" opacity={0.6} />
                </span>
              </button>
            </form>

            <DoodleScribble
              className="absolute bottom-4 right-4"
              size={50}
              opacity={0.08}
            />
          </div>

          {/* Contact info sidebar */}
          <div className="contact-sidebar lg:col-span-2 flex flex-col gap-6">
            {[
              {
                label: "Email Us",
                value: "nevrinelabs@gmail.com",
                href: "mailto:nevrinelabs@gmail.com",
                emoji: "📧",
                color: "var(--card-peach)",
              },
              {
                label: "Call Us",
                value: "+91 86920 19628",
                href: "tel:+918692019628",
                emoji: "📞",
                color: "var(--card-mint)",
              },
              {
                label: "GitHub",
                value: "github.com/Nevrine-Labs",
                href: "https://github.com/Nevrine-Labs",
                emoji: "💻",
                color: "var(--card-blue)",
              },
            ].map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="info-card note-style hover-lift p-5 block no-underline"
                style={{ background: info.color, opacity: 0 }}
              >
                <span className="text-2xl">{info.emoji}</span>
                <h4
                  className="handwritten text-lg font-bold mt-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  {info.label}
                </h4>
                <p
                  className="serif text-sm mt-1 whitespace-pre-line"
                  style={{ color: "var(--ink-medium)" }}
                >
                  {info.value}
                </p>
              </a>
            ))}

            {/* Social links */}
            <div
              className="social-card note-style p-5"
              style={{ background: "var(--card-yellow)", opacity: 0 }}
            >
              <h4
                className="handwritten text-lg font-bold mb-3"
                style={{ color: "var(--ink-dark)" }}
              >
                Follow the doodles ✏️
              </h4>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", href: "https://github.com/Nevrine-Labs" },
                  { label: "Twitter", href: "#" },
                  { label: "LinkedIn", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="serif text-sm hover:text-[var(--accent-primary)] transition-colors duration-200 underline decoration-dashed decoration-1 underline-offset-4"
                    style={{ color: "var(--ink-medium)" }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <DoodleSparkle
              className="mx-auto animate-float"
              size={24}
              opacity={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
