export interface Navbarfields {
    name?: string;
    logo?: {
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

export interface NavbarProps {
    navbar: Navbarfields;
}