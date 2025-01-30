import { contentfulClient } from "./lib/contentfulClient";
import HeroSection from "./components/heroSection";
import FeatureGrid from "./components/featureGrid";
import TeamGrid from "./components/teamGrid";
import CtaSection from "./components/cta";
import NavbarSection from "./components/navbar";
import { FeatureGridData } from "./types/features/featureGridData";
import { CtaSectionData } from "./types/ctaSectionData";
import { Navbarfields } from "./types/navbarData";
import { TeamGridData } from "./types/teams/teamGridData";
import { generateMetadata } from "./metadata";
import { FooterGridData } from "./types/footer/FooterGridData";
import FooterGrid from "./components/footerGrid";

export const metadata = await generateMetadata();

export default async function Home() {
  const [navbarData, heroData, featureGridData, teamGridData, ctaSectionData, footerData] = await Promise.all([
    contentfulClient.getEntries({ content_type: "navbar" }),
    contentfulClient.getEntries({ content_type: "hero" }),
    contentfulClient.getEntries({ content_type: "featureGrid" }),
    contentfulClient.getEntries({ content_type: "teamGrid" }),
    contentfulClient.getEntries({ content_type: "cta" }),
    contentfulClient.getEntries({ content_type: "footerGrid"}),
  ]);

  const navbarFields = navbarData.items[0]?.fields as Navbarfields;
  const heroFields = heroData.items[0]?.fields;
  const featureGridFields = featureGridData.items[0]?.fields as unknown as FeatureGridData;
  const teamGridFields = teamGridData.items[0]?.fields as unknown as TeamGridData;
  const ctaFields = ctaSectionData.items[0]?.fields as unknown as CtaSectionData;
  const footerGridFields = footerData.items[0]?.fields as unknown as FooterGridData;

  return (
    <main>
      <NavbarSection navbar={navbarFields} />
      <HeroSection hero={heroFields} />
      <FeatureGrid featureGrid={featureGridFields} />
      <TeamGrid teamGrid={teamGridFields} />
      <CtaSection cta={ctaFields} />
      <FooterGrid footerGrid={footerGridFields}/>
    </main>
  );
}
  
