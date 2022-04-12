import { BtnColor, BtnVariant } from "../components/CtaList";
import { HeroBlockApi, TextBlockApi } from "../interface/apiBlocks";
import { Block, HeroBlock, TextBlock,  ResponseBlocks } from "../interface/componentBlock";
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
  textPos,
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

const builders = {
  "blocks.hero-block": heroBlockBuilder,
  "blocks.text-block": textBlockBuilder
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