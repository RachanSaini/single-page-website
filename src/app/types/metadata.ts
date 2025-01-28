export interface MetadataFields {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    openGraphUrl: string;
    openGraphImage: {
      fields: {
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
  