import { Container } from "@chakra-ui/react"

export interface TextBlockProps {
  richText: string;
}

function createMarkup(richText: string) {
  return {__html: richText};
}

const TextBlock = ({ richText })=> (
<Container maxW="xl" centerContent
  dangerouslySetInnerHTML={createMarkup(richText)}>
</Container>)

export default TextBlock