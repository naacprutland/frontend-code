import { Container, Box, CSSObject } from "@chakra-ui/react"
import CtaList, { CTABtn, BtnColor, BtnVariant } from './CtaList'
import { AlignItemsOptions } from '../interface/enums'

export interface TextBlockProps {
  richText: string;
  cta: CTABtn[];
  groupPosition: AlignItemsOptions;
  colorScheme: BtnColor;
  variant: BtnVariant;
}

export const contentStyling: CSSObject = {
  h1: {
    fontSize: "5xl",
    fontWeight: "bold"
  },
  h2: {
    fontSize: "4xl",
    fontWeight: "bold"
  },
  h3: {
    fontSize: "3xl",
    fontWeight: "bold"
  },
  p: {
    minHeight: 6
  },
  "ol, ul": {
    marginLeft: 7
  },
  a: {
    color: "blue.500"
  }
}

function createMarkup(richText: string) {
  return {__html: richText};
}

const TextBlock = ({ richText, ...ctaListProps }: TextBlockProps)=> (
<Container maxW="container.md" centerContent>
    <Box width="100%" sx={contentStyling} dangerouslySetInnerHTML={createMarkup(richText)}></Box>
    <CtaList size="md" {...ctaListProps} />
</Container>)

export default TextBlock