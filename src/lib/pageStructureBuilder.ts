import { BtnColor, BtnVariant } from "../components/CtaList";
import { StackProps } from "../components/Stack";
import { HeroBlockApi, HeroTwoBlockApi, MediaBlockApi, StackBlockApi, TextBlockApi } from "../interface/apiBlocks";
import { Block, HeroBlock, TextBlock,  ResponseBlocks, MediaBlock, StackBlock, HeroTwoBlock, FormBlock } from "../interface/componentBlock";
import { AlignItemsOptions } from "../interface/enums";
import { PageTemplateProps } from "../interface/page";
import { PageResponseProps } from "../interface/pageResponse";

const heroBlockBuilder = ({
  __component,
  title, size, image, imageAlt,
  horPos, verPos, textPos, cta
}: HeroBlockApi): HeroBlock => ({
  template: __component as 'blocks.hero-block',
  title,
  size,
  backgroundImage: {
    src: image,
    alt: imageAlt
  },
  horPos,
  verPos,
  textPos: textPos as  AlignItemsOptions,
  cta
})

const textBlockBuilder = ({
  __component,
  richText, title, textPosition, style, cta,
  buttonGroupPosition, buttonColorScheme, buttonVariant
}: TextBlockApi): TextBlock => ({
  template: __component as "blocks.text-block",
  title,
  richText,
  style: style as "blue" | "yellow" | "none" | "white" | "dark",
  textPos: textPosition as  AlignItemsOptions,
  groupPosition: buttonGroupPosition as  AlignItemsOptions,
  colorScheme: buttonColorScheme as BtnColor,
  variant: buttonVariant as BtnVariant,
  cta
})

const mediaBlockBuilder = ({
  __component,
  heading,
  text,
  image,
  imageAlt,
  setBackgroundImage,
  textPosition,
  youTubeVideo
}: MediaBlockApi): MediaBlock => ({
  template: __component as "blocks.media-block",
  heading,
  text,
  setBackgroundImage,
  youTubeVideo,
  textPosition: textPosition as "center" | "start" | "end",
  mediaImage: {
    src: image.url,
    alt: imageAlt || image.alternativeText
  }
})

const stackBlockBuilder = ({
  __component,
  heading,
  headingAligned,
  reverse,
  layers = []
}: StackBlockApi): StackBlock => {
  const stacks: StackProps[] = layers.map(({
    title, text, textAlign, reverse, imageAlt, Image }) => ({
    title,
    text,
    textAlign,
    reverse,
    img: {
      src: Image.url,
      alt: imageAlt || Image.alternativeText
    }
  }));
  return ({
  template: __component as "blocks.stack-block",
  heading,
  headingAligned: headingAligned as AlignItemsOptions,
  reverse,
  stacks
})}

const heroTwoBlockBuilder = ({
  __component,
  title,
  subText,
  image,
  imageAlt,
  cta,
  ctaColorScheme
}: HeroTwoBlockApi): HeroTwoBlock => ({
  template: __component as "blocks.hero-two-block",
  title,
  subText1: subText,
  imgSrc: image?.url,
  imgAlt: imageAlt,
  cta: {
    ...cta,
    link: cta?.path
  },
  colorScheme: ctaColorScheme
})

const formBlockBuilder = ({
  __component,
  label,
  action,
  sections=[]
}): FormBlock => ({
  template: __component as "blocks.form-block",
  label,
  action,
  sections: sections.map(sec => ({
    ...sec,
    rows: sec.rows?.map(row => ({
      fields: row.fields
        .map(field => ({
          ...field,
          ...field[SelectedField[field.type]]
        }))
      }))
  }))
})

enum SelectedField {
  select='select',
  number='number',
  radio='radio',
  checkbox='checkbox',
  textarea='textarea',
  text='input',
  tel='input',
  date='input',
  email='input'
}


const builders = {
  "blocks.hero-block": heroBlockBuilder,
  "blocks.text-block": textBlockBuilder,
  "blocks.media-block": mediaBlockBuilder,
  "blocks.stack-block": stackBlockBuilder,
  "blocks.hero-two-block": heroTwoBlockBuilder,
  "blocks.form-block": formBlockBuilder
}

export async function buildPageStructure(data: PageResponseProps): Promise<Partial<PageTemplateProps>> {
  const clone: PageResponseProps = JSON.parse(JSON.stringify(data))
  const clonePageStructure: ResponseBlocks[] = clone.blocks || []
  const pageStructure: Block[] = clonePageStructure.map(block => {
      if (block.__component in builders) {
        return builders[block.__component](block)
      }
      return block
  });
  
  return {
    ...clone,
    pageStructure
  }
}