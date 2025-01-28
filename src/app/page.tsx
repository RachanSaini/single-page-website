import { contentfulClient } from "./lib/contentfulClient";
import HeroSection from "./components/heroSection";
import FeatureGrid from "./components/featureGrid";
import TeamGrid from "./components/teamGrid";
import CtaSection from "./components/cta";
import NavbarSection from "./components/navbar";
import { FeatureGridData } from "./types/featureGridData";
import { CtaSectionData } from "./types/ctaSectionData";
import { Navbarfields } from "./types/navbarData";
import { TeamGridData } from "./types/teamGridData";
import { generateMetadata } from "./metadata";

export const metadata = await generateMetadata(); // Fetch metadata dynamically

export default async function Home() {
  const [navbarData, heroData, featureGridData, teamGridData, ctaSectionData] = await Promise.all([
    contentfulClient.getEntries({ content_type: "navbar" }),
    contentfulClient.getEntries({ content_type: "hero" }),
    contentfulClient.getEntries({ content_type: "featureGrid" }),
    contentfulClient.getEntries({ content_type: "teamGrid" }),
    contentfulClient.getEntries({ content_type: "cta" }),
  ]);

  const navbarFields = navbarData.items[0]?.fields as Navbarfields;
  const heroFields = heroData.items[0]?.fields;
  const featureGridFields = featureGridData.items[0]?.fields as unknown as FeatureGridData;
  const teamGridFields = teamGridData.items[0]?.fields as unknown as TeamGridData;
  const ctaFields = ctaSectionData.items[0]?.fields as unknown as CtaSectionData;

  return (
    <main>
      <NavbarSection navbar={navbarFields} />
      <HeroSection hero={heroFields} />
      <FeatureGrid featureGrid={featureGridFields} />
      <TeamGrid teamGrid={teamGridFields} />
      <CtaSection cta={ctaFields} />
    </main>
  );
}
  
