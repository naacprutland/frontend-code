import { BtnColor, BtnVariant } from "../components/CtaList";
import { StackProps } from "../components/Stack";
import { HeroBlockApi, MediaBlockApi, StackBlockApi, TextBlockApi } from "../interface/apiBlocks";
import { Block, HeroBlock, TextBlock,  ResponseBlocks, MediaBlock, StackBlock } from "../interface/componentBlock";
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

const builders = {
  "blocks.hero-block": heroBlockBuilder,
  "blocks.text-block": textBlockBuilder,
  "blocks.media-block": mediaBlockBuilder,
  "blocks.stack-block": stackBlockBuilder
}

export async function buildPageStructure(data: PageResponseProps): Promise<PageTemplateProps> {
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