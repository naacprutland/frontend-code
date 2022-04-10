export interface GlobalApi {
    id:          number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    logo?:        Logo;
    seo?:         SEO;
    navigation?:  Navigation;
}

export interface Logo {
    id:  number;
    alt: string;
    src: Src;
}

export interface Src {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number | null;
    height:            number | null;
    formats:           Formats | null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    large:     ImgMeta;
    small:     ImgMeta;
    medium:    ImgMeta;
    thumbnail: ImgMeta;
}

export interface ImgMeta {
    ext:    string;
    url:    string;
    hash:   string;
    mime:   string;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}

export interface Navigation {
    "main-navigation": NavItem[];
    "call-to-actions": NavItem[];
}

export interface NavItem {
    id:           number;
    title:        string;
    type:         string;
    path:         string;
    externalPath: null;
    uiRouterKey:  string;
    menuAttached: boolean;
    order:        number;
    collapsed:    boolean;
    createdAt:    Date;
    updatedAt:    Date;
    related:      Related;
    parent:       Parent | null;
    master:       Master;
    audience:     any[];
    createdBy:    null;
    updatedBy:    null;
}

export interface Master {
    id:        number;
    name:      string;
    slug:      string;
    visible:   boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Parent {
    id:           number;
    title:        string;
    type:         string;
    path:         string;
    externalPath: null;
    uiRouterKey:  string;
    menuAttached: boolean;
    order:        number;
    collapsed:    boolean;
    createdAt:    Date;
    updatedAt:    Date;
}

export interface Related {
    id:           number;
    related_id:   string;
    related_type: string;
    field:        string;
    order:        number;
    master:       string;
    createdAt:    Date;
    updatedAt:    Date;
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
    metaImage:       Src;
    metaSocial:      MetaSocial[];
}

export interface MetaSocial {
    id:            number;
    socialNetwork: string;
    title:         string;
    description:   string;
}
