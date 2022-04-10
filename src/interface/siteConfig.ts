import { FooterProps } from '../components/Footer';
import { HeaderProps } from '../components/Header';
import { SEO } from './seo'

export interface SiteConfig {
  defaultSeo: SEO | null;
  headerProps: HeaderProps;
  footerProps: FooterProps
}
