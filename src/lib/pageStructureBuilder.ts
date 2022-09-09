import { BreadCrumbJsonLdProps } from 'next-seo'
import { Breadcrumb } from '../components/Breadcrumbs'
import { BtnColor, BtnVariant } from '../components/CtaList'
import { StackProps } from '../components/Stack'
import { transformItemsToOptions } from './transformProductItems'
import {
  BreadcrumbsApi,
  FeatureBlockApi,
  FormBlockApi,
  HeroBlockApi,
  HeroTwoBlockApi,
  ItemCardBlockApi,
  MediaBlockApi,
  PageSearchBlockApi,
  StackBlockApi,
  TextBlockApi,
  CheckoutBlockApi,
} from '../interface/apiBlocks'
import { MemberOptions } from '../interface/checkout'
import {
  Block,
  HeroBlock,
  TextBlock,
  ResponseBlocks,
  MediaBlock,
  StackBlock,
  HeroTwoBlock,
  FormBlock,
  Breadcrumbs,
  FeatureBlock,
  ItemDeckBlock,
  CheckoutBlock,
} from '../interface/componentBlock'
import { AlignItemsOptions } from '../interface/enums'
import { ColorScheme } from '../interface/general'
import { PageTemplateProps } from '../interface/page'
import { PageResponseProps } from '../interface/pageResponse'
import { rowBuilder } from './formBuilder'
import { seoBreadcrumbsBuilder } from './seoBuilder'

export const heroBlockBuilder = ({
  __component,
  title,
  size,
  image,
  imageAlt,
  horPos,
  verPos,
  textPos,
  cta,
}: HeroBlockApi): HeroBlock => ({
  template: __component as 'blocks.hero-block',
  title,
  size,
  backgroundImage: {
    src: image,
    alt: imageAlt,
  },
  horPos,
  verPos,
  textPos: textPos as AlignItemsOptions,
  cta,
})

const textBlockBuilder = ({
  __component,
  richText,
  title,
  textPosition,
  style,
  cta,
  buttonGroupPosition,
  buttonColorScheme,
  buttonVariant,
}: TextBlockApi): TextBlock => ({
  template: __component as 'blocks.text-block',
  title,
  richText,
  style: style as 'blue' | 'yellow' | 'none' | 'white' | 'dark',
  textPos: textPosition as AlignItemsOptions,
  groupPosition: buttonGroupPosition as AlignItemsOptions,
  colorScheme: buttonColorScheme as BtnColor,
  variant: buttonVariant as BtnVariant,
  cta,
})

const mediaBlockBuilder = ({
  __component,
  heading,
  text,
  image,
  imageAlt,
  setBackgroundImage,
  textPosition,
  youTubeVideo,
}: MediaBlockApi): MediaBlock => ({
  template: __component as 'blocks.media-block',
  heading,
  text,
  setBackgroundImage,
  youTubeVideo,
  textPosition: textPosition as 'center' | 'start' | 'end',
  mediaImage: {
    src: image.url,
    alt: imageAlt || image.alternativeText,
  },
})

const stackBlockBuilder = ({
  __component,
  heading,
  headingAligned,
  reverse,
  layers = [],
}: StackBlockApi): StackBlock => {
  const stacks: StackProps[] = layers.map(
    ({ title, text, textAlign, reverse, imageAlt, Image }) => ({
      title,
      text,
      textAlign,
      reverse,
      img: {
        src: Image.url,
        alt: imageAlt || Image.alternativeText,
      },
    })
  )
  return {
    template: __component as 'blocks.stack-block',
    heading,
    headingAligned: headingAligned as AlignItemsOptions,
    reverse,
    stacks,
  }
}

const heroTwoBlockBuilder = ({
  __component,
  title,
  subText,
  image,
  imageAlt,
  cta,
  ctaColorScheme,
}: HeroTwoBlockApi): HeroTwoBlock => ({
  template: __component as 'blocks.hero-two-block',
  title,
  subText1: subText,
  imgSrc: image?.url,
  imgAlt: imageAlt,
  cta: {
    ...cta,
    link: cta?.path,
  },
  colorScheme: ctaColorScheme,
})

const formBlockBuilder = ({
  __component,
  page_form,
}: FormBlockApi): FormBlock => {
  const { label = '', action = '', sections = [] } = page_form
  return {
    template: __component as 'blocks.form-block',
    label,
    action,
    sections: sections.map((section) => {
      return {
        label: section.label,
        subText: section.subText,
        rows: rowBuilder(section.fields || []),
      }
    }),
  }
}

export const breadcrumbBuilder = (
  { __component, style }: BreadcrumbsApi,
  pageData?: PageResponseProps
): Breadcrumbs => {
  const slugs: string[] = pageData?.static_path?.slug || []
  const breadcrumbs: Breadcrumb[] = slugs.slice(0, -1).reduce(
    (acc: Breadcrumb[], cur: string) => {
      const label = cur.split('-').join(' ')
      return [
        ...acc,
        {
          label,
          path: `/${cur}`,
        },
      ] as Breadcrumb[]
    },
    [{ label: 'Home', path: '/' }] as unknown as Breadcrumb[]
  )
  return {
    template: __component,
    style,
    breadcrumbs,
  }
}

export const featureBlockBuilder = ({
  __component,
  heading,
  headingAlign,
  image,
  imageAlt,
  title,
  copy,
  date,
  link,
  badge,
  page,
  event,
}: FeatureBlockApi): FeatureBlock => {
  const cardTitle = title || page?.seo?.metaTitle || event?.seo?.metaTitle || ''
  const pageCategory = page?.categories && page?.categories[0]
  const cardLabel = badge?.label || pageCategory?.label || (event && 'Event')
  const src = image || page?.seo?.metaImage || event?.seo?.metaImage
  return {
    template: __component as unknown as 'blocks.feature-block',
    heading,
    headingAlign,
    image: src
      ? {
          src,
          alt: imageAlt || cardTitle,
        }
      : null,
    title: cardTitle || '',
    copy: copy || page?.seo?.metaDescription || event?.seo?.metaDescription,
    date: date || page?.publishedAt || event?.publishedAt || null,
    link: {
      label: link?.label || 'Read On',
      path: link?.link || page?.path || 'calender/' + event?.slug,
      isExternal: link?.external || false,
    },
    badge: cardLabel
      ? {
          label: cardLabel,
          colorScheme: (badge?.colorScheme ||
            pageCategory?.colorScheme ||
            'secondary1') as ColorScheme,
        }
      : null,
  }
}

export const checkoutBlockBuilder = ({
  __component: template,
  details,
  form_data,
  payPalClientID,
  additional_fees: additionalFees,
  resources,
  paypal_client_brand_name: payPalClientBrandName,
  funding_styles,
  membership_options,
}: CheckoutBlockApi): CheckoutBlock => {
  const fullFormData = formBlockBuilder(form_data)
  const membershipOptions: MemberOptions[] = (membership_options || []).map(
    ({
      id,
      title,
      slug,
      type,
      description,
      price,
      isDisabled,
      paymentOptions,
      additional_fees: additionalFees,
    }) => ({
      id,
      title,
      slug,
      type: type as 'regular' | 'life' | 'renew',
      description,
      price,
      isDisabled,
      paymentOptions,
      additionalFees,
    })
  )

  return {
    template,
    details,
    payPalClientID,
    additionalFees,
    payPalClientBrandName,
    formData: fullFormData.sections,
    checkoutOptions: transformItemsToOptions(membershipOptions),
    membershipOptions,
    fundingStyling: (funding_styles || []).map((val) => val.styles),
    optionData: {
      checkoutType: {
        label: resources?.checkout_type_label || '',
        placeholder: resources?.checkout_type_placeholder || '',
        requiredMessage: resources?.checkout_type_required_message || '',
      },
      paymentType: {
        label: resources?.payment_type_label || '',
        requiredMessage: resources?.payment_type_required_message || '',
      },
      membershipType: {
        label: resources?.membership_type_label || '',
        placeholder: resources?.membership_type_placeholder || '',
        requiredMessage: resources?.membership_id_require_message || '',
      },
      membershipId: {
        label: resources?.membership_id_label || '',
        placeholder: resources?.membership_id_placeholder || '',
        requireMessage: resources?.membership_id_require_message || '',
        subText: resources?.membership_id_subtext,
      },
    },
  }
}

const itemDeckBuilder = ({
  __component,
  headingAlign,
  cards = [],
  ...rest
}: ItemCardBlockApi): ItemDeckBlock => {
  return {
    template: __component as unknown as 'blocks.item-deck-block',
    headingAlign: headingAlign,
    cards: cards.map(({ title, subText1, subText2, subText3, link }) => ({
      title,
      subText1,
      subText2,
      subText3,
      link,
    })),
    ...rest,
  }
}

const pageSearchBlockBuilder = ({ __component, slug }: PageSearchBlockApi) => ({
  template: __component,
  slug,
})

const builders = {
  'blocks.hero-block': heroBlockBuilder,
  'blocks.text-block': textBlockBuilder,
  'blocks.media-block': mediaBlockBuilder,
  'blocks.stack-block': stackBlockBuilder,
  'blocks.hero-two-block': heroTwoBlockBuilder,
  'blocks.form-block': formBlockBuilder,
  'blocks.breadcrumbs': breadcrumbBuilder,
  'blocks.feature-block': featureBlockBuilder,
  'blocks.item-deck-block': itemDeckBuilder,
  'blocks.page-search-block': pageSearchBlockBuilder,
  'blocks.checkout-block': checkoutBlockBuilder,
}

export async function buildPageStructure(
  data: PageResponseProps
): Promise<Partial<PageTemplateProps>> {
  const clone: PageResponseProps = JSON.parse(JSON.stringify(data))
  const clonePageStructure: ResponseBlocks[] = clone.blocks || []
  const pageStructure: Block[] = clonePageStructure.map((block) => {
    if (block.__component in builders) {
      return builders[block.__component](block, data)
    }
    return block
  })
  let breadCrumbsSEO: BreadCrumbJsonLdProps | null = null
  const breadcrumbData = pageStructure?.find(
    (v) => v.template === 'blocks.breadcrumbs'
  )
  if (breadcrumbData) {
    breadCrumbsSEO = seoBreadcrumbsBuilder(breadcrumbData as Breadcrumbs)
  }

  return {
    ...clone,
    breadCrumbsSEO,
    pageStructure,
  }
}
