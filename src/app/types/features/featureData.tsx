export interface FeatureIcon {
    fields: {
      file: {
        url: string;
        contentType: string;
        details: {
          image: {
            width: number;
            height: number;
          };
        };
        size: number;
        fileName: string;
      };
      title: string;
      description: string;
    };
  }
  
  // Feature Data Structure
  export interface Feature {
    sys: {
      id: string;
    };
    fields: {
      title: string;
      description: string;
      icon: FeatureIcon;
    };
  }
  