import { Image } from './generalApi'

export interface SEOApi {
    id:              number;
    metaTitle:       string;
    metaDescription: string;
    keywords:        string;
    metaRobots:      null | string;
    structuredData:  null;
    metaViewport:    null;
    canonicalURL:    string;
    metaImage:       Image;
    metaSocial:      any[];
}