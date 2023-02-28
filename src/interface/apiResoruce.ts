import { Image } from './generalApi'

export interface ResourceApiData {
  data: { id: number; attributes: ResourceData }[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface ResourceData {
  title: string
  copy: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  link: Link
  badges: Badge[]
  image: {
    src: {
      data: {
        id: number
        attributes: Image
      }
    }
    alt: string
  }
  page: Page
}

export interface Link {
  id: number
  label: string
  path: string
  external: boolean
}

export interface Badge {
  id: number
  label: string
  colorScheme:
    | 'prime1'
    | 'prime2'
    | 'secondary1'
    | 'secondary2'
    | 'secondary3'
    | 'secondary4'
    | 'secondary5'
    | 'secondary6'
}

export interface Page {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  label: string
  slug: string
  path: string
  static_path: StaticPath
  publish_at: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  bulletin: boolean
  resource: any
  seo: Seo
}

export interface StaticPath {
  slug: string[]
}

export interface Seo {
  id: number
  metaTitle: string
  metaDescription: string
  keywords: any
  metaRobots: any
  structuredData: any
  metaViewport: any
  canonicalURL: any
  metaImage: MetaImage
}

export interface MetaImage {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Image
}

export interface Attributes2 {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  large: Large
  small: Small
  medium: Medium
  thumbnail: Thumbnail
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}

export interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}

export interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}
