/**
 * FAQ content.
 *
 * ⚠️  Answers marked with `needsConfirmation: true` are EDITABLE PLACEHOLDERS.
 *     They describe how the process generally works without stating a policy
 *     that has not been confirmed — no deposit amounts, cancellation windows,
 *     travel fees, or timelines are invented. Replace them with the real
 *     policy wording and remove the flag.
 */

export type FaqItem = {
  question: string;
  answer: string;
  needsConfirmation?: boolean;
};

export type FaqSection = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    id: "appointments",
    title: "Appointments",
    items: [
      {
        question: "How far in advance should an appointment be requested?",
        answer:
          "As early as you can. Dates are held in the order they're confirmed, and weekends during wedding and quinceañera season fill first. If your date is close, message anyway — last-minute openings do happen.",
        needsConfirmation: true,
      },
      {
        question: "How is availability confirmed?",
        answer:
          "Everything is handled directly over WhatsApp. Send your date, location, and the service you're interested in, and you'll get availability, pricing, and timing back in the same conversation.",
      },
      {
        question: "Can I bring inspiration photos?",
        answer:
          "Please do. Photos are the fastest way to show what you mean by 'natural' or 'glam' — those words mean something different to everyone. Send them ahead over WhatsApp or bring them to the appointment.",
      },
      {
        question: "How long does makeup take?",
        answer:
          "It depends on the service and the look. Soft glam is a shorter appointment than full glam, and bridal includes extra time for adjustments and photos. Exact timing is confirmed when your appointment is scheduled.",
        needsConfirmation: true,
      },
      {
        question: "Are lashes included?",
        answer:
          "Lash options are discussed when you book so the style suits your eye shape and the look you're after. Confirm what's included for your specific service over WhatsApp.",
        needsConfirmation: true,
      },
      {
        question: "Are group bookings available?",
        answer:
          "Yes — bridal parties, quinceañera courts, families, and events. Share the number of people and the time everyone needs to be ready, and a schedule is built around it.",
      },
    ],
  },
  {
    id: "booking",
    title: "Deposits & Confirmation",
    items: [
      {
        question: "Is a deposit required?",
        answer:
          "Deposit and confirmation details are shared directly over WhatsApp when your date is held. [Replace this with the confirmed deposit policy.]",
        needsConfirmation: true,
      },
      {
        question: "How are prices confirmed?",
        answer:
          "Pricing depends on the service, the number of people, the location, and the timing involved, so it's quoted per booking rather than listed. Message on WhatsApp with your details for an exact quote.",
      },
    ],
  },
  {
    id: "changes",
    title: "Cancellations & Late Arrivals",
    items: [
      {
        question: "What happens if I need to cancel or reschedule?",
        answer:
          "Let me know as early as possible over WhatsApp and we'll work it out. [Replace this with the confirmed cancellation and rescheduling policy.]",
        needsConfirmation: true,
      },
      {
        question: "What if I arrive late?",
        answer:
          "Appointments are scheduled back to back, so a late start can shorten your service. If you're running behind, message on WhatsApp right away. [Replace this with the confirmed late-arrival policy.]",
        needsConfirmation: true,
      },
    ],
  },
  {
    id: "travel",
    title: "Travel & Location",
    items: [
      {
        question: "Does Slayed by Bedoya travel?",
        answer:
          "Travel to venues, hotels, and homes is available. Coverage area and any travel costs depend on the distance and the timing, so share your location on WhatsApp for specifics.",
        needsConfirmation: true,
      },
      {
        question: "What is needed at the location?",
        answer:
          "A table or counter, a chair, good natural light if possible, and access to a power outlet. If you're getting ready in a hotel room, a spot near a window works best.",
      },
    ],
  },
  {
    id: "skin",
    title: "Skin Preparation",
    items: [
      {
        question: "How should I prepare my skin?",
        answer:
          "Come with a clean, moisturised face and no makeup. Keep lips exfoliated and hydrated in the days before. Avoid new products, strong actives, or any first-time facial or peel close to your appointment — reactions are unpredictable and hard to cover.",
      },
      {
        question: "What if I have sensitive skin or allergies?",
        answer:
          "Mention it over WhatsApp before your appointment. Products can be adjusted, and knowing in advance is much better than finding out in the chair.",
      },
    ],
  },
  {
    id: "bridal",
    title: "Bridal",
    items: [
      {
        question: "How early should bridal clients inquire?",
        answer:
          "Bridal dates are typically the first to book, often well ahead of the wedding. If you have a date, it's worth asking now — even if the details aren't settled yet.",
        needsConfirmation: true,
      },
      {
        question: "Is a bridal preview available?",
        answer:
          "A preview is the best way to settle the look before the wedding day — colour, coverage, lashes, and longevity all get tested. Availability and details are arranged over WhatsApp.",
        needsConfirmation: true,
      },
      {
        question: "Can the bridal party be included?",
        answer:
          "Yes. Bridesmaids, mothers, and family can be scheduled in the same block as the bride. Share how many people need makeup and what time you need to be finished.",
      },
      {
        question: "Do you coordinate with the photographer?",
        answer:
          "Timing is planned backwards from your photographer's first look so makeup is finished before they start. Send the day's schedule when you have it.",
      },
    ],
  },
  {
    id: "lessons",
    title: "Makeup Lessons",
    items: [
      {
        question: "What happens in a private lesson?",
        answer:
          "The lesson is built around you — your features, your current skill level, and the looks you want to be able to do on your own. We work on your face, at your pace, with the techniques that apply to it.",
      },
      {
        question: "Should I bring my own products?",
        answer:
          "Yes. Working with what you already own is the point — you'll learn what's worth keeping, what's being used wrong, and what's missing. Gaps can be filled with recommendations afterwards.",
      },
    ],
  },
  {
    id: "professional",
    title: "Professional Bookings",
    items: [
      {
        question: "How do production and editorial bookings work?",
        answer:
          "Send the project type, date, location, approximate hours, number of models or talent, the company or production, and any creative references. Rates and availability are confirmed from there.",
      },
      {
        question: "Is on-set coverage available for full shoot days?",
        answer:
          "Yes — including touch-ups, continuity, and look changes across the day. Share the call sheet or schedule when you have one.",
      },
    ],
  },
];

export const bridalFaq = faqSections.find((section) => section.id === "bridal")!;
