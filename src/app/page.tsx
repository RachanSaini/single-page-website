import { contentfulClient } from "./lib/contentfulClient";
import HeroSection from "./components/heroSection";
import FeatureGrid from "./components/featureGrid";
import { FeatureGridData } from "./types/featureGridData"; // Importing the type for FeatureGridData
import CtaSection from "./components/cta";
import { CtaSectionData } from "./types/ctaSectionData";
import NavbarSection from "./components/navbar";
import { Navbarfields } from "./types/navbarData";
import { TeamGridData } from "./types/teamGridData";
import TeamGrid from "./components/teamGrid";

export default async function Home() {
  //Fetching Navbar data
  const navbarData = await contentfulClient.getEntries({ content_type: "navbar" });
  const navbar = navbarData.items[0];
  const navbarFields = navbar.fields as Navbarfields;

  // Fetching Hero Data
  const heroData = await contentfulClient.getEntries({ content_type: "hero" });
  const hero = heroData.items[0];

  // Fetching FeatureGrid Data
  const featureGridData = await contentfulClient.getEntries({ content_type: "featureGrid" });
  const featureGrid = featureGridData.items[0];   
  const featureGridFields = featureGrid.fields as unknown as FeatureGridData;

  //Fetching Team Grid Data
  const teamGridData = await contentfulClient.getEntries({ content_type: "teamGrid" });
  const teamGrid = teamGridData.items[0];
  const teamGridFields = teamGrid.fields as unknown as TeamGridData;

  //fetching CTA Data
  const ctaSectionData = await contentfulClient.getEntries({ content_type: "cta"});
  const ctaData = ctaSectionData.items[0];  
  const ctaFields = ctaData.fields as unknown as CtaSectionData;

  return (
    <div>
      <NavbarSection navbar={navbarFields} />
      <HeroSection hero={hero.fields} />
      <FeatureGrid featureGrid={featureGridFields} />
      <TeamGrid teamGrid={teamGridFields}/>
      <CtaSection cta={ctaFields}/>
    </div>
  );
}
