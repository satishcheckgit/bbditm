import { Metadata } from "next";
import { getProgrammes, getSchools } from "@/data";
import { SchoolShowcase } from "@/components/sections/schools/school-showcase";
import { ProgrammeDiscovery } from "@/components/sections/programmes/programme-discovery";

export const metadata: Metadata = {
  title: "Academics & Schools — BBDITM Lucknow",
  description: "Academic framework, undergraduate and postgraduate departments at BBDITM Lucknow.",
};

export default async function AcademicsPage() {
  const programmes = await getProgrammes();
  const schools = await getSchools();

  return (
    <div className="bg-white">
      <SchoolShowcase schools={schools} />
      <ProgrammeDiscovery programmes={programmes} />
    </div>
  );
}
