import { Container } from "@chakra-ui/react"
import Card, { CardProps }  from './Card'
import GridLayout from './GridLayout'

export interface DeckBlockProps {
  position?: number;
  cards: CardProps[];
  layout?: 'rows' | 'rowsReverse' | 'alternatingRows' | 'cards';
  alternate?: 'odds' | 'evens';
}

const rowValues = {
  rows: 'row',
  rowsReverse: 'row-reverse'
}

const alternateRow = (
  index: number,
  alternate: 'odds' | 'evens'): 'row' | 'row-reverse' => {
  const opts = ['odds' , 'evens']
  return alternate !== opts[index % 2] ? 'row-reverse' : 'row'
}

const DeckBlock = ({ cards=[], layout = "cards", alternate ='odds' }: DeckBlockProps) => (
  <Container as="section" maxW={`container.${layout === 'cards' ? 'lg': 'md'}`} centerContent>
    <GridLayout columns={layout === 'cards' ? [1, 2, 3 ] : 1}>
      {cards.map((data, i) => (
        <Card key={data.title + i} {...data}
          layout={
            layout === 'alternatingRows' ? alternateRow(i, alternate) : rowValues[layout]} />
      ))}
    </GridLayout>
  </Container>
)

export default DeckBlock