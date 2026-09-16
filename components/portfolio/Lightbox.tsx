"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { PortfolioItem } from "@/lib/portfolio";

type LightboxProps = {
  items: PortfolioItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

const SWIPE_THRESHOLD = 48;

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const item = items[index];

  const goTo = useCallback(
    (delta: number) => {
      const next = (index + delta + items.length) % items.length;
      onNavigate(next);
    },
    [index, items.length, onNavigate],
  );

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(-1);
        return;
      }
      if (event.key !== "Tab") return;

      // Keep focus inside the dialog while it is open.
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [goTo, onClose]);

  if (!item) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Portfolio image ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-50 flex flex-col bg-ink/97"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start === null) return;
        const distance = event.changedTouches[0].clientX - start;
        if (Math.abs(distance) < SWIPE_THRESHOLD) return;
        goTo(distance < 0 ? 1 : -1);
      }}
    >
      <div className="flex items-center justify-between px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-3 sm:px-8">
        <p className="label !text-ivory/60">
          {index + 1} / {items.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="-mr-3 flex h-12 w-12 items-center justify-center text-ivory"
        >
          <span className="sr-only">Close image viewer</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
        <Image
          key={item.id}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="(min-width: 640px) 80vw, 100vw"
          className="max-h-full w-auto object-contain"
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-8">
        <button
          type="button"
          onClick={() => goTo(-1)}
          className="label flex min-h-12 items-center !text-ivory/70 transition-colors hover:!text-ivory"
        >
          <span aria-hidden="true" className="mr-2">
            &larr;
          </span>
          Previous
        </button>

        <p className="min-w-0 flex-1 truncate text-center text-sm text-ivory/60">
          {item.caption ?? item.alt}
        </p>

        <button
          type="button"
          onClick={() => goTo(1)}
          className="label flex min-h-12 items-center !text-ivory/70 transition-colors hover:!text-ivory"
        >
          Next
          <span aria-hidden="true" className="ml-2">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
