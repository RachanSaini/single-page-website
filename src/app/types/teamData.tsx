export interface TeamIcon {
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
  
  export interface Team {
    sys: {
      id: string;
    };
    fields: {
      title: string;
      description: string;
      icon: TeamIcon;
    };
  }
  