"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolio, portfolioFilters, type PortfolioCategory } from "@/lib/portfolio";
import { trackEvent } from "@/lib/analytics";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "./Lightbox";

type Filter = PortfolioCategory | "all";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? portfolio : portfolio.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <>
      <div className="border-y border-ink/10">
        <Container size="wide">
          <div
            role="group"
            aria-label="Filter portfolio by category"
            className="flex flex-wrap gap-x-6 gap-y-1 py-3"
          >
            {portfolioFilters.map((option) => {
              const active = option.value === filter;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setFilter(option.value);
                    trackEvent("portfolio_interaction", { action: "filter", filter: option.value });
                  }}
                  className={`label min-h-11 border-b-2 transition-colors ${
                    active
                      ? "border-burgundy !text-burgundy"
                      : "border-transparent hover:!text-ink"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      <Container size="wide" className="py-10 lg:py-16">
        <p aria-live="polite" className="sr-only">
          Showing {items.length} {items.length === 1 ? "image" : "images"}
          {filter === "all" ? "" : ` in ${filter.replace("-", " ")}`}.
        </p>

        {/* CSS columns give real masonry without measuring anything in JS. */}
        <div className="columns-2 gap-3 lg:columns-3 lg:gap-5">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setOpenIndex(index);
                trackEvent("portfolio_interaction", { action: "open_lightbox", image: item.id });
              }}
              className="group mb-3 block w-full break-inside-avoid overflow-hidden bg-cream lg:mb-5"
            >
              <span className="sr-only">Open larger view: {item.alt}</span>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 33vw, 50vw"
                // The first row is above the fold on most screens.
                loading={index < 3 ? "eager" : "lazy"}
                className="h-auto w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
              />
            </button>
          ))}
        </div>
      </Container>

      {openIndex !== null ? (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      ) : null}
    </>
  );
}
