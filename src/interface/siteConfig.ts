import { SEO } from './seo'

export interface SiteConfig {
  logo: {
    src: string;
    alt: string;
  },
  pageLinks: {
    label: string;
    path: string;
  }[],
  defaultSeo: SEO;
}
