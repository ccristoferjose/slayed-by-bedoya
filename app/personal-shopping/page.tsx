import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { OfferingPage } from "@/components/sections/OfferingPage";

export const metadata: Metadata = pageMetadata({
  title: "Personal Beauty Shopping",
  description: `One-on-one makeup shopping in ${site.location} with Slayed by Bedoya — shade matching, product recommendations, makeup bag building, and budget-friendly selection.`,
  path: "/personal-shopping",
  image: "/images/service-personal-shopping.jpg",
});

export default function PersonalShoppingPage() {
  const service = getService("personal-beauty-shopping")!;

  return (
    <OfferingPage
      service={service}
      label="Shopping"
      title="Personal beauty shopping"
      intro="Personalized guidance for choosing makeup that fits your complexion, your style, your routine, and your budget — instead of buying on a guess and finding out it's wrong at home."
      analyticsLocation="personal_shopping_page"
      body={[
        "Beauty counters are designed to sell, not to match. Store lighting flatters everything, testers are contaminated, and the shade that looked right at the counter oxidises two hours later.",
        "A shopping session fixes that. Shades are matched properly, products are chosen for what your skin actually does through the day, and anything that won't work for you gets ruled out before you pay for it.",
        "Budget is part of the conversation, not an awkward aside. There is almost always a cheaper product that performs the same — and occasionally one worth paying for.",
      ]}
      points={[
        {
          title: "Start with what you own",
          body: "Send photos of your current collection over WhatsApp. Half the job is identifying what's already working and what's been wrong the whole time.",
        },
        {
          title: "Match properly",
          body: "Shade matching for complexion products in real light, checked for undertone and for how the formula settles rather than how it swatches.",
        },
        {
          title: "Shop with a list",
          body: "In store together, or with a personalized list you take yourself. Either way you go in knowing exactly what you're looking for.",
        },
        {
          title: "Build the bag",
          body: "The finished collection covers your everyday routine and your event looks, with no duplicates and no expensive mistakes sitting unused.",
        },
      ]}
      ctaHeading="Ask about personal shopping"
      ctaBody="Tell Slayed by Bedoya what you're trying to solve — a wrong foundation shade, a collection that isn't working, or starting over from nothing."
    />
  );
}
