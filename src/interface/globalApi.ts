import { Image } from "./generalApi";
export interface GlobalApi {
    id:          number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    logo?:        Logo;
    seo?:         SEO;
    footer?: Footer;
    navigation?:  Navigation[];
}

export interface Footer {
    id:          number;
    subText:     string;
    links:       Link[];
    socialLinks: SocialLink[];
}

export interface Link {
    id:         number;
    label:      string;
    path:       string;
    external: boolean;
}

export interface SocialLink {
    id:   number;
    icon: string;
    path: string;
}

export interface Logo {
    id:  number;
    alt: string;
    src: Image;
}

export interface Navigation {
    id:        number;
    title:     string;
    slug:      string;
    createdAt: Date;
    updatedAt: Date;
    items:     NavItem[];
}

export interface NavItem {
    id:        number;
    order:     number;
    title:     string;
    url:       string;
    target:    null | '_blank';
    createdAt: Date;
    updatedAt: Date;
    parent:    ParentId | null;
    children?: NavItem[];
}

export interface ParentId {
    id: number;
}

export interface SEO {
    id:              number;
    metaTitle:       string;
    metaDescription: string;
    keywords:        string;
    metaRobots:      string;
    structuredData:  object;
    metaViewport:    string;
    canonicalURL:    string;
    metaImage:       Image;
    metaSocial:      MetaSocial[];
}

export interface MetaSocial {
    id:            number;
    socialNetwork: string;
    title:         string;
    description:   string;
}
