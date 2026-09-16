import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { OfferingPage } from "@/components/sections/OfferingPage";

export const metadata: Metadata = pageMetadata({
  title: "Beauty Consultations",
  description: `Personal beauty consultations in ${site.location} with Slayed by Bedoya — routine planning, product recommendations, collection refresh, and personalized shopping lists.`,
  path: "/beauty-consultation",
  image: "/images/service-consultation.jpg",
});

export default function BeautyConsultationPage() {
  const service = getService("personal-beauty-consultation")!;

  return (
    <OfferingPage
      service={service}
      label="Consultations"
      title="Personal beauty consultation"
      intro="For clients who want direction without booking an appointment in the chair — what suits you, what to buy, what to stop buying, and how to build a routine you'll actually keep up with."
      analyticsLocation="consultation_page"
      body={[
        "Not every question needs a makeup appointment. Sometimes the problem is a routine that takes too long, a collection full of things that don't go together, or simply not knowing what suits your face.",
        "A consultation is the conversation version of the service — an honest assessment of what you own, what your features want, and what's worth changing.",
        "You leave with a plan and a list rather than a full face of makeup. If you'd rather learn to apply it yourself, a private lesson picks up where this ends.",
      ]}
      points={[
        {
          title: "Share where you are",
          body: "Your current routine, the products you own, and what isn't working. Photos over WhatsApp are enough to start.",
        },
        {
          title: "Get an honest read",
          body: "What suits your features and colouring, what's fighting them, and which habits are costing you time for no result.",
        },
        {
          title: "Plan the routine",
          body: "A realistic everyday routine and a version you can scale up for events, built around the time you actually have.",
        },
        {
          title: "Take the list",
          body: "A personalized shopping list — what to keep, what to replace, what to add, and in what order.",
        },
      ]}
      ctaHeading="Ask about a consultation"
      ctaBody="Tell Slayed by Bedoya what you'd like guidance on. No appointment in the chair required."
    />
  );
}
