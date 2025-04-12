"use client";
import HeaderPageComponent from "@/components/header";
import HeroSectionPageComponent from "@/components/hero";
import ExperiencePageComponent from "@/components/experience";
import ProjectsPageComponent from "@/components/projects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col no-scrollbar overflow-hidden">
      <HeaderPageComponent />
      <HeroSectionPageComponent />
      <ExperiencePageComponent />
      <ProjectsPageComponent />
      <Footer />
    </div>
  );
}
