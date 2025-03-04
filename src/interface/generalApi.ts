export interface Image {
  id?: number
  name?: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  formats: Formats
  hash?: string
  ext?: string
  mime?: string
  size?: number
  url?: string
  previewUrl?: null
  provider?: string
  provider_metadata?: null
  createdAt?: Date
  updatedAt?: Date
}

export interface Formats {
  large: ImgMeta
  xlarge?: ImgMeta
  small: ImgMeta
  xsmall?: ImgMeta
  medium: ImgMeta
  thumbnailLarge: ImgMeta
  thumbnailMedium: ImgMeta
  thumbnailSmall: ImgMeta
  thumbnailXsmall: ImgMeta
}

export interface ImgMeta {
  ext?: string
  url: string
  hash?: string
  mime?: string
  name?: string
  path?: null
  size?: number
  width: number
  height: number
}
