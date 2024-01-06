import { fontMapper } from "./../lib/fonts";
export type FontFamily = keyof typeof fontMapper;

interface Image {
  name: string;
  type: string;
  initialDataUrl: string;
  dataUrl: string;
}

export interface Theme {
  Header: {
    fontFamily: FontFamily;
    fontSize: `${18 | 19 | 20 | 21 | 22 | 23 | 24}`;
    text?: string;
    image?: Image;
  };
  Question: {
    fontFamily: FontFamily;
    fontSize: `${12 | 13 | 14 | 15 | 16 | 17 | 18}`;
  };
  Text: {
    fontFamily: FontFamily;
    fontSize: `${12 | 13 | 14 | 15}`;
    text?: string;
  };
  primaryColor: string;
  secondaryColor: string;
}
