import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Introduction } from "@/components/sections/Introduction";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { BridalExperience } from "@/components/sections/BridalExperience";
import { LashBrow } from "@/components/sections/LashBrow";
import { PersonalShopping } from "@/components/sections/PersonalShopping";
import { Education } from "@/components/sections/Education";
import { Consultations } from "@/components/sections/Consultations";
import { ProfessionalCreative } from "@/components/sections/ProfessionalCreative";
import { Testimonials } from "@/components/sections/Testimonials";
import { SocialFeed } from "@/components/sections/SocialFeed";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Introduction />
      <FeaturedServices />
      <BridalExperience />
      <LashBrow />
      <PersonalShopping />
      <Education />
      <Consultations />
      <ProfessionalCreative />
      <Testimonials />
      <SocialFeed />
      <FinalCTA />
    </>
  );
}
