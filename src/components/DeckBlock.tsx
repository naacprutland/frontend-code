import { VStack, Heading, Flex, Button, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import Card, { CardProps } from './Card'
import ArticleCard, { ArticleCardProps } from "./ArticleCard"
import Container from "./Container"
import { Link, StyleType } from "../interface/general"
import { Styling } from "../interface/enums"

export interface DeckBlockProps {
  position?: number;
  heading?: string;
  headingPosition?: 'start' | 'center' | 'end';
  cards: CardProps[] | ArticleCardProps[];
  link?: Link,
  onAction?: {
    action: () => void;
    label: string;
  },
  hideButton?: boolean;
  style?: StyleType;
  disableButton?: boolean;
  stackDeck?: boolean;
}

const DeckBlock = ({
  heading,
  headingPosition = 'start',
  cards = [],
  position = 1,
  link,
  onAction,
  hideButton,
  style = "none",
  disableButton,
  stackDeck = false
}: DeckBlockProps) => {
  const setFull = useBreakpointValue({ base: true, sm: false })
  return (
    <Container className="grid" as="section" py={[8, 12, 14]}
      layerStyle={Styling[style]} >
      {heading && (
        <Heading className={stackDeck ? "gcol-12 gcol-md-12 gcol-lg-10 center" : "gcol-12"} as={position > 0 ? 'h2' : 'h1'}
          lineHeight="1"
          textAlign={headingPosition}
          paddingBottom={["6", "8", "12"]}
          fontSize={['4xl', '5xl', '6xl']}>
          {heading}
        </Heading>)
      }
      {!stackDeck &&
        <SimpleGrid className="gcol-12" columns={[1, 2, 4]} spacingX={[1, 6, 8]} spacingY={[6, 8]} >
          {cards.map((data, i) => (
            <Card key={data.title + i} {...data} />
          ))}
        </SimpleGrid>
      }
      {stackDeck &&
        <VStack className="gcol-12 gcol-md-12 gcol-lg-10 center" spacing="6" >
          {cards.map((data, i) => (
            <ArticleCard key={data.title + i} {...data} />
          ))}
        </VStack>
      }
      {
        (link || onAction) && (
          <Flex width="100%"
            className={stackDeck ? "gcol-12 gcol-md-12 gcol-lg-10 center" : "gcol-12"}
            paddingTop={["6", "8", "12"]}
            justify={link && !onAction ? "start" : "center"}>
            {
              (!hideButton && link && !onAction) && <NextLink href={link?.path} passHref>
                <Button as="a"
                  width={setFull ? '100%' : 'auto'}
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
                disabled={disableButton}
                width={setFull ? '100%' : 'auto'}
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