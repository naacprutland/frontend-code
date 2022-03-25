import { Box, Heading, useTheme } from "@chakra-ui/react"
import Container from "./Container"
import CtaList, { CTABtn, BtnColor, BtnVariant } from './CtaList'
import { AlignItemsOptions } from '../interface/enums'
import styled from 'styled-components'

export interface TextBlockProps {
  title?: string,
  richText: string;
  cta: CTABtn[];
  textPos: AlignItemsOptions;
  groupPosition: AlignItemsOptions;
  colorScheme: BtnColor;
  variant: BtnVariant;
  position?: number;
}

export const ContentContainer = styled(Box)`
  h1, h2, h3 {
    font-weight: ${({ fontweights }) => fontweights.bold};
  }

  h1 {
    font-size: ${({ fontsizes }) => fontsizes['5xl']};
  }

  h2 {
    font-size: ${({ fontsizes }) => fontsizes['4xl']};
  }

  h3 {
    font-size: ${({ fontsizes }) => fontsizes['3xl']};
  }

  p {
    min-height: ${({ space }) => space['6']};
  }

  ol,
  ul {
    margin-left: ${({ space }) => space['7']};
  }

  a {
    color: ${({ colors }) => colors.blue[500]};
    position: relative;
    transition: all 0.25s;

    &::after {
      border-bottom: ${({ space }) => space.px} solid ${({ colors }) => colors.blue[700]};
      bottom: 0;
      content: '';
      height: 0;
      left: 0;
      position: absolute;
      transition: all 0.25s;
      width: 0;
    }

    &:hover {
      color: ${({ colors }) => colors.blue[700]};

      &::after {
        content: '';
        width: 100%;
      }
    }
  }

  .table {
    display: block;
    overflow-x:auto;
  }

  table {   
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid black;
    box-sizing: border-box;
    padding: 8px;
    overflow: hidden;
  }

`

function createMarkup(richText: string) {
  return {__html: richText};
}

const TextBlock = ({
  title, 
  richText,
  textPos,
  position=0,
  ...ctaListProps }: TextBlockProps)=> {
  const theme = useTheme()
  return (
    <Container className="grid" textAlign={textPos}>
      <Box className="gcol-12 gcol-md-8 gcol-lg-6 center" 
        overflow="hidden"
        w="100%">
        {title && <Heading as={position > 0 ? 'h2' : 'h1'}
                  fontSize={['4xl', '5xl', '6xl']}>
                  {title}
                </Heading>}
        <ContentContainer  dangerouslySetInnerHTML={createMarkup(richText)}
          colors={theme.colors}
          fontweights={theme.fontWeights}
          space={theme.space}
          fontsizes={theme.fontSizes} />
        <CtaList size="md" {...ctaListProps} paddingTop="3" />
      </Box>
    </Container>
  )
}

export default TextBlock