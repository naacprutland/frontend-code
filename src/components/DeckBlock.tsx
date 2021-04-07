import { Container } from "@chakra-ui/react"
import Card, { CardProps }  from './Card'
import GridLayout from './GridLayout'

export interface DeckBlockProps {
  cards: CardProps[];
}

const DeckBlock = ({ cards }: DeckBlockProps) => (
  <Container as="section" maxW="container.lg" centerContent>
    <GridLayout columns={[1, 2, 3 ]}>
      {cards.map((data, i) => (
        <Card key={data.title + i} {...data} />
      ))}
    </GridLayout>
  </Container>
)

export default DeckBlock