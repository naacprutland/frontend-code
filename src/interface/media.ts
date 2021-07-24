export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface MediaImage {
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: {
    [keys: string]: ImageFormat;
  }
}