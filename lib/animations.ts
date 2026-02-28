"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────
   useGSAP — run a GSAP callback once,
   scoped to a container ref
   ────────────────────────────────────────── */
export function useGSAP(
  callback: (container: HTMLElement) => void,
  deps: unknown[] = []
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        callback(containerRef.current);
      }
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

/* ──────────────────────────────────────────
   Preset animation factories
   ────────────────────────────────────────── */

/** Fade-in + slide-up for a batch of elements */
export function staggerReveal(
  selector: string,
  container: HTMLElement,
  options: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
    delay?: number;
  } = {}
) {
  const {
    y = 40,
    duration = 0.8,
    stagger = 0.12,
    start = "top 85%",
    delay = 0,
  } = options;

  gsap.fromTo(
    container.querySelectorAll(selector),
    { y, opacity: 0, scale: 0.97 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/** Heading reveal — clip + slide */
export function headingReveal(
  selector: string,
  container: HTMLElement,
  options: { start?: string; delay?: number } = {}
) {
  const { start = "top 85%", delay = 0 } = options;

  gsap.fromTo(
    container.querySelectorAll(selector),
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      delay,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/** Parallax float for decorative elements */
export function parallaxFloat(
  selector: string,
  container: HTMLElement,
  options: { speed?: number } = {}
) {
  const { speed = 50 } = options;
  const elements = container.querySelectorAll(selector);

  elements.forEach((el) => {
    gsap.to(el, {
      y: -speed,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });
}

/** Draw SVG line on scroll */
export function drawOnScroll(
  selector: string,
  container: HTMLElement,
  options: { start?: string } = {}
) {
  const { start = "top 80%" } = options;
  const paths = container.querySelectorAll(selector);

  paths.forEach((path) => {
    const svgPath = path as SVGPathElement;
    const length = svgPath.getTotalLength?.() || 500;
    gsap.set(svgPath, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(svgPath, {
      strokeDashoffset: 0,
      duration: 1.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    });
  });
}

/** Scale-in from center */
export function scaleIn(
  selector: string,
  container: HTMLElement,
  options: { stagger?: number; start?: string; delay?: number } = {}
) {
  const { stagger = 0.1, start = "top 85%", delay = 0 } = options;

  gsap.fromTo(
    container.querySelectorAll(selector),
    { scale: 0, opacity: 0, rotation: -5 },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 0.6,
      stagger,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/** Rotate-in cards with offset */
export function cardReveal(
  selector: string,
  container: HTMLElement,
  options: { stagger?: number; start?: string } = {}
) {
  const { stagger = 0.1, start = "top 80%" } = options;

  gsap.fromTo(
    container.querySelectorAll(selector),
    { y: 60, opacity: 0, rotation: gsap.utils.random(-4, 4) },
    {
      y: 0,
      opacity: 1,
      rotation: (i: number) => (i % 2 === 0 ? -1.5 : 1.5),
      duration: 0.7,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/** Magnetic hover effect for interactive elements */
export function magneticHover(element: HTMLElement, strength: number = 0.3) {
  const handleMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  element.addEventListener("mousemove", handleMove);
  element.addEventListener("mouseleave", handleLeave);

  return () => {
    element.removeEventListener("mousemove", handleMove);
    element.removeEventListener("mouseleave", handleLeave);
  };
}
