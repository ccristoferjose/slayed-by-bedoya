"use client";

import { useCallback, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, for sequences of items. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * A single gentle fade-and-rise as the element enters the viewport.
 *
 * The observer is attached through a ref callback rather than an effect, so it
 * is created exactly once per mounted node and torn down with it. One observer
 * per element, disconnected the moment it fires — no scroll listeners, no
 * animation library.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: RevealProps) {
  const [shown, setShown] = useState(false);

  const observe = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    // Older browsers and any environment without the API just show the content.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={observe}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
