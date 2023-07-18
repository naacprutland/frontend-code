import { FooterProps } from '../components/Footer'
import { MenuItem } from '../components/Header'
import { CTA } from '../interface/general'
import { GlobalApi, NavItem } from '../interface/globalApi'
import { SiteConfig } from '../interface/siteConfig'

function mainMenu(navItems: NavItem[] = []): MenuItem[] {
  return navItems.map((item) => {
    return {
      label: item.title,
      path: item.url || '/',
      external: item.target === '_blank',
      subitems: mainMenu(item.children),
    }
  })
}

function ctaBuilder(navItems: NavItem[]): CTA[] {
  const btn = [
    {
      color: 'prime1',
      textColor: 'white',
    },
    {
      color: 'prime2',
      textColor: 'prime1.500',
    },
  ]
  return navItems.map((item, i) => {
    return {
      label: item.title,
      path: item.url,
      external: item.target === '_blank',
      style: 'solid',
      color: btn[i].color,
      textColor: btn[i].textColor,
    }
  })
}

function convertToConfig({
  logo,
  seo,
  footer,
  navigation,
}: GlobalApi): SiteConfig {
  const {
    ctas,
    mega_menu,
  }: {
    ctas: CTA[]
    mega_menu: MenuItem[]
  } = navigation.reduce(
    (acc, cur) => {
      if (cur.slug === 'call-to-actions') {
        acc.ctas = ctaBuilder(cur.items)
      }

      if (cur.slug === 'main-navigation') {
        acc.mega_menu = mainMenu(cur.items)
      }

      return acc
    },
    { ctas: [], mega_menu: [] }
  )

  return {
    defaultSeo: {
      title: seo?.metaTitle || '',
      description: seo?.metaDescription || '',
      canonical: seo?.canonicalURL || '',
      openGraph: {
        url: '',
        title: '',
        description: '',
        site_name: '',
        images: [],
      },
    },
    headerProps: {
      logo: {
        src: logo?.src,
        alt: logo?.alt || '',
      },
      ctas,
      mega_menu,
      fixed: true,
      banners: [],
    },
    footerProps: footer as FooterProps,
  }
}

export default convertToConfig
