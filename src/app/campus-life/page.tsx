import { Metadata } from "next";
import { CampusExperience } from "@/components/sections/campus/campus-experience";

export const metadata: Metadata = {
  title: "Campus Life — BBDITM Lucknow",
  description: "Experience student life, sports, hostels, and cultural clubs at BBD City.",
};

export default function CampusLifePage() {
  return (
    <div className="bg-white">
      <CampusExperience />
    </div>
  );
}
