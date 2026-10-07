import { getHomepageData } from "@/data";
import { HomeHero } from "@/components/sections/hero/home-hero";
import { ProgrammeDiscovery } from "@/components/sections/programmes/programme-discovery";
import { UniversityProof } from "@/components/sections/proof/university-proof";
import { SchoolShowcase } from "@/components/sections/schools/school-showcase";
import { PlacementHighlights } from "@/components/sections/placements/placement-highlights";
import { CampusExperience } from "@/components/sections/campus/campus-experience";
import { NewsAndEvents } from "@/components/sections/news/news-and-events";
import { AdmissionCTA } from "@/components/sections/cta/admission-cta";

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <>
      <HomeHero />
      <ProgrammeDiscovery programmes={data.featuredProgrammes} />
      <UniversityProof />
      <SchoolShowcase schools={data.schools} />
      <PlacementHighlights data={data.placements} />
      <CampusExperience />
      <NewsAndEvents news={data.news} events={data.events} />
      <AdmissionCTA />
    </>
  );
}
