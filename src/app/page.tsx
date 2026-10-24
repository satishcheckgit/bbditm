import { getHomepageData } from "@/data";
import { HomeHero } from "@/components/sections/hero/home-hero";
import { HomeHeroZeptoMobile } from "@/components/sections/hero/home-hero-zepto-mobile";
import { ProgrammeDiscovery } from "@/components/sections/programmes/programme-discovery";
import { UniversityProof } from "@/components/sections/proof/university-proof";
import { AcademicGraphicShowcase } from "@/components/sections/academic/academic-graphic-showcase";
import { StudyMaterialsShowcase } from "@/components/sections/academic/study-materials-showcase";
import { SchoolShowcase } from "@/components/sections/schools/school-showcase";
import { PlacementHighlights } from "@/components/sections/placements/placement-highlights";
import { CampusExperience } from "@/components/sections/campus/campus-experience";
import { BentoGallery } from "@/components/ui/bento-gallery";
import { DEFAULT_APPLE_GALLERY_ITEMS } from "@/data/showcase-gallery";
import { NewsAndEvents } from "@/components/sections/news/news-and-events";
import { AdmissionCTA } from "@/components/sections/cta/admission-cta";

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <>
      {/* Hero: desktop = full HomeHero (stacked cards), mobile = Zepto-style single card */}
      <div className="hidden md:block">
        <HomeHero />
      </div>
      <HomeHeroZeptoMobile />
      <StudyMaterialsShowcase />
      <ProgrammeDiscovery programmes={data.featuredProgrammes} />
      <BentoGallery
        eyebrow="Curated Showcase"
        title="A Campus Full of Stories"
        description="Every corner holds a story. Every moment sparks a memory. Explore the people, places, and experiences that make BBDITM extraordinary"
        items={DEFAULT_APPLE_GALLERY_ITEMS}
        enableQuickView={true}
        viewAllHref="/gallery"
        viewAllText="Explore Full Showcase"
      />
      <PlacementHighlights data={data.placements} />
      <NewsAndEvents news={data.news} events={data.events} />
    </>
  );
}
