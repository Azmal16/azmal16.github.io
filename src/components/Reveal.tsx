"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger helper — 1 unit ≈ 60ms. */
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

/** Fades and lifts its children into view once, respecting reduced-motion. */
export default function Reveal({ children, delay = 0, y = 22, className, as = "div" }: Props) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: delay * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
