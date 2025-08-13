"use client";

import React from "react";
import styles from "./AnimatedTitle.module.css";

type AnimatedTitleProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delayStepMs?: number;
};

export default function AnimatedTitle({
  text,
  as: Tag = "h1",
  className,
  delayStepMs = 35,
}: AnimatedTitleProps) {
  // Split by characters but preserve spaces
  const chars = Array.from(text);

  return (
    <Tag className={`${styles.root} ${className ?? ""}`.trim()} aria-label={text}>
      <span className={styles.srOnly}>{text}</span>
      {chars.map((ch, idx) => (
        <span
          key={`${ch}-${idx}`}
          aria-hidden
          className={styles.char}
          style={{ animationDelay: `${idx * delayStepMs}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </Tag>
  );
}


