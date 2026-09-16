export type Testimonial = {
  /** The client's own words. Never paraphrased, never invented. */
  quote: string;
  /** First name only. */
  name: string;
  /** e.g. "Bridal Client", "Soft Glam Client", "Quinceañera Client". */
  service: string;
};

/**
 * REAL TESTIMONIALS ONLY.
 *
 * This array is intentionally empty. The "Client Love" section does not
 * render at all while it is empty, so the site never shows invented praise.
 * Add entries as clients send them and the section appears automatically.
 *
 * Example shape:
 *   { quote: "…", name: "Marisol", service: "Bridal Client" }
 */
export const testimonials: Testimonial[] = [];

export const hasTestimonials = testimonials.length > 0;
