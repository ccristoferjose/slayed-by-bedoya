import { site } from "./site";

/**
 * Builds a wa.me deep link with a pre-filled message.
 * The number lives in one place only — `lib/site.ts`.
 */
export function createWhatsAppUrl(message: string): string {
  const phone = site.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Pre-filled openers. Square brackets are intentional: WhatsApp drops the
 * visitor into the chat with the message ready to edit, and the brackets
 * show them exactly which details to fill in.
 */
export const whatsappMessages = {
  general:
    "Hi! I'd like more information about makeup services with Slayed by Bedoya.",

  softGlam:
    "Hi! I'm interested in Soft Glam. I'd like to know availability and pricing for [date].",

  fullGlam:
    "Hi! I'm interested in Full Glam. I'd like to know availability and pricing for [date].",

  bridal:
    "Hi! I'm interested in Bridal Makeup. My wedding date is [date], the location is [location], and I'd like information about availability and services.",

  bridalDate:
    "Hi! I'm interested in bridal makeup with Slayed by Bedoya. My wedding date is [date] and the location is [location].",

  bridalParty:
    "Hi! I'm interested in bridal makeup for myself and my bridal party. My wedding date is [date], the location is [location], and there are [number] people needing makeup.",

  quinceanera:
    "Hi! I'm interested in Quinceañera Makeup. The event is on [date]. I'd like information about availability and pricing.",

  event:
    "Hi! I'm interested in makeup for an event on [date]. I'd like information about availability and pricing.",

  specialOccasion:
    "Hi! I'm interested in Special Occasion Makeup for [occasion] on [date]. I'd like information about availability and pricing.",

  nightOut:
    "Hi! I'm interested in Concert & Night-Out Makeup for [date]. I'd like information about availability and pricing.",

  lashLift:
    "Hi! I'm interested in a Lash Lift and would like information about availability and pricing.",

  browLamination:
    "Hi! I'm interested in Brow Lamination / Brow Lift and would like information about availability and pricing.",

  lashBrow:
    "Hi! I'm interested in lash and brow services and would like information about availability and pricing.",

  personalShopping:
    "Hi! I'm interested in a Personal Beauty Shopping session and would like more information.",

  makeupLesson:
    "Hi! I'm interested in a 1-on-1 makeup lesson and would like more information.",

  consultation:
    "Hi! I'm interested in a personal beauty consultation and would like more information.",

  professional:
    "Hi! I'm contacting Slayed by Bedoya about a professional makeup project. The project type is [photoshoot / editorial / fashion show / production], scheduled for [date].",

  /** Longer brief used on the Professional & Creative page. */
  professionalBrief: [
    "Hi! I'd like to start a professional inquiry with Slayed by Bedoya.",
    "",
    "Project type: [photoshoot / editorial / fashion show / on-set]",
    "Date: [date]",
    "Location: [location]",
    "Approximate hours: [hours]",
    "Number of models / talent: [number]",
    "Company or production: [name]",
    "Creative references: [links or description]",
  ].join("\n"),

  portfolio:
    "Hi! I saw your portfolio and I love your work. I'd like to check availability for [date].",

  availability:
    "Hi! I'd like to check availability for [date]. The service I'm interested in is [service].",
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;
