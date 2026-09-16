import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/ui/LegalLayout";

export const metadata: Metadata = pageMetadata({
  title: "Service Policies",
  description: `Booking, deposit, cancellation, travel, and service policies for ${site.name}.`,
  path: "/terms",
});

/**
 * TEMPLATE — every bracketed item is a policy only the artist can set.
 * Nothing here invents a deposit amount, a cancellation window, or a fee.
 */
export default function TermsPage() {
  return (
    <LegalLayout label="Legal" title="Service Policies" updated="[date]">
      <p className="!mt-0 border-l border-burgundy/40 pl-5 text-sm text-taupe">
        Every bracketed item below is a policy that needs your decision. Fill
        them in, delete anything that doesn&apos;t apply, and update the date above
        before launch. Until then, all terms are confirmed directly on WhatsApp.
      </p>

      <section>
        <h2>Booking and confirmation</h2>
        <p>
          All appointments are arranged directly over WhatsApp. A date is not
          held until it is confirmed in that conversation. [State what confirms
          a booking — a deposit, a written confirmation, or both.]
        </p>
      </section>

      <section>
        <h2>Deposits</h2>
        <p>
          [State whether a deposit is required, how much or what percentage, how
          it is paid, and whether it is refundable or applied to the balance.]
        </p>
      </section>

      <section>
        <h2>Cancellations and rescheduling</h2>
        <p>
          [State how much notice is required to cancel or reschedule, what
          happens to the deposit in each case, and whether a rescheduled date is
          subject to availability.]
        </p>
      </section>

      <section>
        <h2>Late arrivals</h2>
        <p>
          Appointments are scheduled back to back, so a late start can shorten
          your service. [State any grace period, what happens beyond it, and
          whether a shortened service is charged in full.]
        </p>
      </section>

      <section>
        <h2>Travel</h2>
        <p>
          Travel to venues, hotels, and homes is available. [State the standard
          coverage area, how travel outside it is charged, and any minimum
          booking for on-location work.]
        </p>
      </section>

      <section>
        <h2>Bridal</h2>
        <p>
          [State bridal-specific terms — preview policy, how the wedding-day
          schedule is agreed, bridal party minimums, and the balance due date.]
        </p>
      </section>

      <section>
        <h2>Professional and production bookings</h2>
        <p>
          [State rates structure, minimum call time, overtime, kit fees, agency
          terms, and payment terms for production work.]
        </p>
      </section>

      <section>
        <h2>Skin, allergies, and sensitivities</h2>
        <p>
          Clients are asked to disclose allergies, sensitivities, active skin
          conditions, or recent treatments before their appointment so products
          can be adjusted. See the{" "}
          <Link href="/faq" className="underline underline-offset-4 hover:text-burgundy">
            FAQ
          </Link>{" "}
          for skin preparation guidance. [Add any right to decline service on
          health or safety grounds.]
        </p>
      </section>

      <section>
        <h2>Photography and usage</h2>
        <p>
          [State whether photographs taken during or after the service may be
          used for portfolio and social media, and how a client can decline.]
        </p>
      </section>

      <section>
        <h2>Questions</h2>
        <p>
          Anything not covered here is confirmed directly with {site.name} on
          WhatsApp.
        </p>
      </section>
    </LegalLayout>
  );
}
