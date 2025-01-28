import { CtaSectionData } from "../types/ctaSectionData";

interface CtaSectionProps {
  cta: CtaSectionData;
}

export default function CtaSection({ cta }: CtaSectionProps) {
  return (
    <section className="cta-section bg-light py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800">{cta.heading}</h2>
      <p className="text-lg text-gray-600 my-4">{cta.subheading}</p>
      <a
        href={`tel:${cta.ctaButtonLink}`}
        className="cta-button inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
      >
        {cta.ctaButtonText}
      </a>
    </section>
  );
}
