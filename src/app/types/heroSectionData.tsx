export interface Herofields {
    heading?: string;
    subheading?: string;
    ctaButtonText?: string;
    ctaButtonLink?: string;
    backgroundImage?: {
        fields: {
          title: string;
          file: {
            url: string;
            details: {
              image: {
                width: number;
                height: number;
              };
            };
          };
        };
    };
  }

export interface HeroSectionProps {
    hero: Herofields;
}