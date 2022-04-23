import { Heading, Flex, Button, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import Card, { CardProps } from './Card'
import Container from "./Container"
import { Link, StyleType } from "../interface/general"
import { Styling } from "../interface/enums"

export interface DeckBlockProps {
  position?: number;
  heading?: string;
  cards: CardProps[];
  link?: Link,
  onAction?: {
    action: () => void;
    label: string;
  },
  hideButton?: boolean;
  style?: StyleType
}

const DeckBlock = ({
  heading,
  cards = [],
  position = 1,
  link,
  onAction,
  hideButton,
  style="none"
}: DeckBlockProps) => {
  const setFull = useBreakpointValue({ base: true, sm: false })
  return (
    <Container as="section" py={[8, 12, 14]}
      layerStyle={Styling[style]} >
      {heading && (
        <Heading as={position > 0 ? 'h2' : 'h1'}
          lineHeight="1"
          paddingBottom={["6", "8", "12"]}
          fontSize={['4xl', '5xl', '6xl']}>
          {heading}
        </Heading>)
      }
      <SimpleGrid columns={[1, 2, 4]} spacingX={[1, 6, 8]} spacingY={[6, 8]} >
        {cards.map((data, i) => (
          <Card key={data.title + i} {...data} />
        ))}
      </SimpleGrid>
      {
        (link || !onAction) && (
          <Flex width="100%"
            paddingTop={["6", "8", "12"]}
            justify={link && !onAction ? "start" : "center"}>
            {
              (!hideButton && link && !onAction) && <NextLink href={link?.path} passHref>
                <Button as="a"
                  isFullWidth={setFull}
                  size="lg"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="secondary6">
                  {link?.label}
                </Button>
              </NextLink>
            }
            {
              (!hideButton && onAction) && <Button
                type="button"
                isFullWidth={setFull}
                onClick={onAction.action}
                size="lg"
                colorScheme="secondary4">
                {onAction?.label}
              </Button>
            }
          </Flex>)
      }
    </Container>
  )
}

export default DeckBlock