import Link from "next/link";
import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingContent } from "@/components/landing/landing-content";

export const metadata: Metadata = {
  title: "iHerdHub | Home",
  description: "iHerdHub home page",
};

export default function Page() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
