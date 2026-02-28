"use client";

import React from "react";
import {
  DoodleArrow,
  DoodleScribble,
  DoodleSparkle,
} from "../doodle/DoodleElements";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
      style={{ background: "var(--paper-light)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form — notebook paper */}
          <div
            className="lg:col-span-3 ruled-lines rounded-lg p-8 relative"
            style={{
              background: "var(--paper-white)",
              border: "1px solid rgba(42, 37, 32, 0.06)",
            }}
          >
            {/* Red margin line */}
            <div
              className="absolute top-0 bottom-0 left-10"
              style={{
                width: "1px",
                background: "rgba(224, 122, 95, 0.15)",
              }}
            />

            <form className="pl-6 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              {/* Name */}
              <div>
                <label
                  className="handwritten text-lg block mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  Your Name ✏️
                </label>
                <input
                  type="text"
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

              {/* Email */}
              <div>
                <label
                  className="handwritten text-lg block mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  Email Address 📧
                </label>
                <input
                  type="email"
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

              {/* Project type */}
              <div>
                <label
                  className="handwritten text-lg block mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  Project Type 🎨
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg serif text-sm transition-all duration-200 focus:outline-none appearance-none cursor-pointer"
                  style={{
                    background: "rgba(245, 241, 232, 0.5)",
                    border: "1.5px dashed rgba(42, 37, 32, 0.12)",
                    color: "var(--ink-medium)",
                  }}
                  id="contact-project-type"
                >
                  <option value="">Pick one...</option>
                  <option value="web">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="brand">Branding</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI Solution</option>
                  <option value="other">Something Else ✨</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  className="handwritten text-lg block mb-2"
                  style={{ color: "var(--ink-dark)" }}
                >
                  Your Message 💬
                </label>
                <textarea
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

              {/* Submit */}
              <button
                type="submit"
                className="relative self-start px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover-lift tape-effect"
                style={{
                  background: "var(--ink-dark)",
                  color: "var(--paper-warm)",
                }}
              >
                <span className="flex items-center gap-2">
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
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info cards */}
            {[
              {
                label: "Email Us",
                value: "hello@nevrinelabs.com",
                emoji: "📧",
                color: "var(--card-peach)",
              },
              {
                label: "Call Us",
                value: "+1 (555) 0123-456",
                emoji: "📞",
                color: "var(--card-mint)",
              },
              {
                label: "Visit Us",
                value: "42 Creativity Lane,\nDesign District",
                emoji: "📍",
                color: "var(--card-blue)",
              },
            ].map((info) => (
              <div
                key={info.label}
                className="note-style hover-lift p-5"
                style={{ background: info.color }}
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
              </div>
            ))}

            {/* Social links */}
            <div
              className="note-style p-5"
              style={{ background: "var(--card-yellow)" }}
            >
              <h4
                className="handwritten text-lg font-bold mb-3"
                style={{ color: "var(--ink-dark)" }}
              >
                Follow the doodles ✏️
              </h4>
              <div className="flex gap-4">
                {["Twitter", "GitHub", "Dribbble", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="serif text-sm hover:text-[var(--accent-primary)] transition-colors duration-200 underline decoration-dashed decoration-1 underline-offset-4"
                    style={{ color: "var(--ink-medium)" }}
                  >
                    {social}
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
