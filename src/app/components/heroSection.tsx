import Image from "next/image";
import { HeroSectionProps } from "../types/heroSectionData";

export default function HeroSection({ hero }: HeroSectionProps) {
    return (
        <section className="hero">
            <div className="left">
                <h1>{hero.heading}</h1>
                <p>{hero.subheading}</p>
                <a href={hero.ctaButtonLink} className="cta-button">
                    {hero.ctaButtonText}
                </a>
            </div>
            <div className="right">
                {hero.backgroundImage && (
                    <Image
                        src={`https:${hero.backgroundImage.fields.file.url}`}
                        width={hero.backgroundImage.fields.file.details.image.width}
                        height={hero.backgroundImage.fields.file.details.image.height}
                        alt={hero.backgroundImage.fields.title}
                        priority={true}
                    />
                )}
            </div>
        </section>
    );
}