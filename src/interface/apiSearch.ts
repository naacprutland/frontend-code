import { SEOApi } from "./apiSeo";
import { Image } from "./generalApi";

export interface SearchApi {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    label:       string;
    slug:        string;
    path:        string;
    static_path: StaticPath;
    publish_at:  null;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    bulletin:    boolean | null;
    seo:         SEO;
}

export interface SEO {
    id:              number;
    metaTitle:       string;
    metaDescription: string;
    keywords:        null | string;
    metaRobots:      null | string;
    structuredData:  object | null;
    metaViewport:    null | string;
    canonicalURL:    null | string;
    metaImage:       MetaImage;
}

export interface MetaImage {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: Image;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    Jpg = ".jpg",
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:    EXT;
    url:    string;
    hash:   string;
    mime:   MIME;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}

export interface StaticPath {
    slug: string[];
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
