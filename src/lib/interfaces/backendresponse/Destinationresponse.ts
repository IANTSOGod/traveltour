import type { Tourresponse } from "./Tourresponse";

interface Image {
  url: string;
}

export interface Destinationresponse {
  title: string;
  description: string;
  has_img: Image;
  has_tour: Tourresponse[];
}
