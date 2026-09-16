import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { OfferingPage } from "@/components/sections/OfferingPage";

export const metadata: Metadata = pageMetadata({
  title: "Makeup Education",
  description: `Private one-on-one makeup lessons in ${site.location} with Slayed by Bedoya — everyday technique, special-event looks, and product and brush education, taught on your own face.`,
  path: "/education",
  image: "/images/service-education.jpg",
});

export default function EducationPage() {
  const service = getService("private-makeup-lesson")!;

  return (
    <OfferingPage
      service={service}
      label="Education"
      title="Private makeup lessons"
      intro="A lesson on your own face, with your own products, aimed at the looks you actually want to be able to do. No generic routine, no tutorial you'll never repeat."
      analyticsLocation="education_page"
      body={[
        "Most people don't need more products — they need to know what the ones they own are for, and why the technique that works on someone else's face doesn't work on theirs.",
        "A lesson starts by looking at what you already have and what you're currently doing. From there we work through placement, blending, and finish for your features specifically, at whatever pace you need.",
        "You do the applying. Watching someone else do it is how you leave impressed and still unable to repeat it.",
      ]}
      points={[
        {
          title: "Tell me your goal",
          body: "A faster morning routine, an evening look you can do yourself, or fixing the one step that always goes wrong. Message on WhatsApp and we'll set the focus.",
        },
        {
          title: "Bring your kit",
          body: "Your products, your brushes, your current routine. We work with what you own so the lesson translates to your bathroom the next morning.",
        },
        {
          title: "Learn on your own face",
          body: "Technique is demonstrated, then you do it while I watch and correct. Hands-on is the only part that sticks.",
        },
        {
          title: "Leave with a plan",
          body: "What to keep, what to replace, what you're missing, and the order to do it in. Recommendations are made afterwards if you want them.",
        },
      ]}
      ctaHeading="Ask about a private lesson"
      ctaBody="Tell Slayed by Bedoya what you want to learn and your current comfort level with makeup. The lesson is built from there."
    />
  );
}
