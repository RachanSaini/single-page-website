export interface FooterIcon {
  sys: {
    id: string;
  };
  fields: {
    title: string;
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
  };
}

export interface Footer {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    link: string;
    icon: FooterIcon;
  };
}