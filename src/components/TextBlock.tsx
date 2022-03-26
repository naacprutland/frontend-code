import { Box, Heading, useTheme } from "@chakra-ui/react"
import Container from "./Container"
import CtaList, { CTABtn, BtnColor, BtnVariant } from './CtaList'
import { createMarkup } from '../lib/util'
import { AlignItemsOptions } from '../interface/enums'
import styled from 'styled-components'

export interface TextBlockProps {
  title?: string,
  richText: string;
  cta?: CTABtn[];
  textPos: AlignItemsOptions;
  groupPosition: AlignItemsOptions;
  colorScheme: BtnColor;
  variant?: BtnVariant;
  position?: number;
  style?: 'none' | 'white' | 'dark' | 'blue' | 'yellow'
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
    color: ${({ colors }) => colors.blue[400]};
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
      color: ${({ colors }) => colors.purple[700]};

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
    width: 100%;
  }

  th, td {
    border: 1px solid black;
    box-sizing: border-box;
    padding: 8px;
    overflow: hidden;
    min-width: 25%;
  }

`

const styles = {
  'none' : {
    bg: 'none',
    color: 'black'
  },
  'white' : {
    bg: 'white',
    color: 'black'
  },
  'dark' : {
    bg: 'secondary7.500',
    color: 'white'
  },
  'blue' : {
    bg: 'prime1.500',
    color: 'white'
  },
  'yellow' : {
    bg: 'prime2.500',
    color: 'prime1.500'
  }
}

const TextBlock = ({
  title, 
  richText='',
  textPos,
  position=0,
  style='none',
  ...ctaListProps }: TextBlockProps)=> {
  const theme = useTheme()
  return (
    <Container className="grid"
      py={[8, 12, 14]} 
      {...styles[style]}
      textAlign={textPos}>
      <Box className="gcol-12 gcol-md-8 gcol-lg-6 center" 
        overflow="hidden"
        w="100%">
        {title && <Heading as={position > 0 ? 'h2' : 'h1'}
                  paddingBottom={richText ? "3" : "0"}
                  fontSize={['2xl', '3xl', '4xl']}>
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