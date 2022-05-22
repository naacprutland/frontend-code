import { Box, useTheme, ChakraProps } from "@chakra-ui/react"
import styled from 'styled-components'
import { createMarkup } from '../lib/util'

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

// eslint-disable-next-line @typescript-eslint/ban-types
export interface ContentTextProps extends ChakraProps {
    richText: string;
}

const ContentText = ({ richText, ...boxProps }: ContentTextProps) => {
    const theme = useTheme()
    return (
        <ContentContainer
            dangerouslySetInnerHTML={createMarkup(richText)}
            colors={theme.colors}
            fontweights={theme.fontWeights}
            space={theme.space}
            fontsizes={theme.fontSizes}
            width="100%"
            {...boxProps} />
    )
}

export default ContentText