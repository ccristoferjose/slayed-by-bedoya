import type { Metadata } from "next";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/ui/LegalLayout";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How Slayed by Bedoya handles information collected through this website.`,
  path: "/privacy",
});

/**
 * TEMPLATE — describes what this site actually does today, which is very
 * little: no forms, no accounts, no payments. Have it reviewed against the
 * privacy law that applies to you before launch, and fill in the bracketed
 * details.
 */
export default function PrivacyPage() {
  return (
    <LegalLayout label="Legal" title="Privacy Policy" updated="[date]">
      <p className="!mt-0 border-l border-burgundy/40 pl-5 text-sm text-taupe">
        This is a starting template describing how the website is currently
        built. Review it against the privacy law that applies where you operate,
        fill in the bracketed details, and update the date above before launch.
      </p>

      <section>
        <h2>What this website collects</h2>
        <p>
          This website has no contact forms, no accounts, and no payment
          processing. Nothing you type is submitted to or stored by this site.
        </p>
        <p>
          When you tap a WhatsApp button, you are handed off to WhatsApp with a
          message pre-filled. The conversation that follows happens on WhatsApp,
          under WhatsApp&apos;s own privacy terms, not this website&apos;s.
        </p>
      </section>

      <section>
        <h2>Analytics</h2>
        <p>
          {site.gaId
            ? "This site uses Google Analytics 4 to understand which pages and services visitors are interested in. It records anonymised usage data such as pages viewed, approximate location, device type, and which buttons were tapped. It does not record your name, phone number, or message content."
            : "Analytics is not currently enabled on this site. If Google Analytics 4 is switched on later, this section should be updated to say what it records."}
        </p>
      </section>

      <section>
        <h2>Information shared over WhatsApp</h2>
        <p>
          Details you send over WhatsApp — your name, event date, location, and
          any photos — are used only to answer your enquiry and to provide the
          service you book. [State here how long you keep client conversations
          and whether details are shared with anyone else, such as an assistant
          artist.]
        </p>
      </section>

      <section>
        <h2>Photography</h2>
        <p>
          [State here whether client photographs may be used on this website or
          on social media, and how a client can ask for a photo not to be used
          or to be removed.]
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          You can ask what information is held about you, ask for it to be
          corrected, or ask for it to be deleted. [Add the contact route for
          these requests and any timeframe you commit to.]
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to {site.name} on WhatsApp
          {site.email ? `, or by email at ${site.email}` : ""}.
        </p>
      </section>
    </LegalLayout>
  );
}
