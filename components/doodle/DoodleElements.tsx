"use client";

import React from "react";

interface DoodleProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}

export function DoodleArrow({
  className = "",
  color = "#2a2520",
  size = 40,
  opacity = 0.3,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M5 30Q15 10 35 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 8L35 15L27 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleStar({
  className = "",
  color = "#e07a5f",
  size = 30,
  opacity = 0.4,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M15 2L17 12L27 12L19 18L22 28L15 22L8 28L11 18L3 12L13 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleDivider({
  className = "",
  color = "#2a2520",
  opacity = 0.2,
}: DoodleProps & { width?: number }) {
  return (
    <svg
      width="100%"
      height="16"
      viewBox="0 0 400 16"
      fill="none"
      className={className}
      style={{ opacity }}
      preserveAspectRatio="none"
    >
      <path
        d="M0 8Q25 2 50 8T100 8T150 8T200 8T250 8T300 8T350 8T400 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleScribble({
  className = "",
  color = "#2a2520",
  size = 60,
  opacity = 0.15,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 60 30"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M2 15C8 5 15 25 22 12C29 0 36 28 43 15C50 2 57 20 58 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleCircle({
  className = "",
  color = "#3d85c6",
  size = 40,
  opacity = 0.25,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <circle
        cx="20"
        cy="20"
        r="16"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
        transform="rotate(-5, 20, 20)"
      />
    </svg>
  );
}

export function DoodleSquiggle({
  className = "",
  color = "#81b29a",
  size = 80,
  opacity = 0.2,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size * 0.3}
      viewBox="0 0 80 24"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M2 12C12 4 18 20 28 12C38 4 44 20 54 12C64 4 70 20 78 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleCheckmark({
  className = "",
  color = "#81b29a",
  size = 24,
  opacity = 0.5,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M4 13L9 18L20 6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleHeart({
  className = "",
  color = "#e07a5f",
  size = 24,
  opacity = 0.35,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M12 21C12 21 3 15 3 9C3 5 6 3 9 3C10.5 3 11.5 4 12 5C12.5 4 13.5 3 15 3C18 3 21 5 21 9C21 15 12 21 12 21Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleSparkle({
  className = "",
  color = "#d4b896",
  size = 20,
  opacity = 0.4,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path d="M10 2V18M2 10H18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 4L16 16M16 4L4 16" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleLightbulb({
  className = "",
  color = "#e07a5f",
  size = 32,
  opacity = 0.3,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M16 4C11 4 8 8 8 12C8 16 11 18 12 20H20C21 18 24 16 24 12C24 8 21 4 16 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M12 24H20M13 27H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 3L8 1M22 3L24 1M4 12H1M31 12H28" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleRocket({
  className = "",
  color = "#3d85c6",
  size = 36,
  opacity = 0.25,
}: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M18 4C18 4 14 10 14 22L18 28L22 22C22 10 18 4 18 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M14 18L8 22L10 26" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M22 18L28 22L26 26" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="18" cy="14" r="2" stroke={color} strokeWidth="1" />
    </svg>
  );
}

/* Decorative line drawings for backgrounds */
export function DoodleBgDecoration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      style={{ opacity: 0.06 }}
    >
      {/* Loose spiral */}
      <path
        d="M150 150C150 120 180 100 200 120C220 140 200 170 170 170C140 170 120 140 140 110C160 80 200 70 230 100C260 130 240 180 200 200C160 220 110 190 100 150C90 110 120 60 170 50"
        stroke="#2a2520"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Small stars */}
      <path d="M50 50L52 56L58 56L53 60L55 66L50 62L45 66L47 60L42 56L48 56Z" stroke="#e07a5f" strokeWidth="1" fill="none" />
      <path d="M250 230L252 236L258 236L253 240L255 246L250 242L245 246L247 240L242 236L248 236Z" stroke="#3d85c6" strokeWidth="1" fill="none" />
      {/* Dots cluster */}
      <circle cx="80" cy="250" r="2" fill="#81b29a" opacity="0.4" />
      <circle cx="90" cy="245" r="1.5" fill="#81b29a" opacity="0.3" />
      <circle cx="85" cy="260" r="1" fill="#81b29a" opacity="0.5" />
    </svg>
  );
}
