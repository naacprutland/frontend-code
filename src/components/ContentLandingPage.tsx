import React, { useState, useEffect } from "react";
import HeroBlock, { HeroProps} from "./HeroBlock"
import DeckBlock, { DeckBlockProps } from "./DeckBlock"
import useCardData from '../hooks/useCardsData'
import { MediaImage } from '../interface/media'

export interface ResultItem {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image: {
    src: MediaImage;
    alt: string;
  },
  page: {
    id: string;
    slug: string;
    homePage: boolean;
    path: string;
  }
}

export interface CLPProps {
  currentPage: number; 
  totalPages: number;
  totalResults: number;
  results: ResultItem[];
  hero: HeroProps;
}



const ContentLandingPage = ({ results, currentPage=1, totalPages=1, hero }: CLPProps) => {
  const [curPage, setCurPage] = useState<number>(currentPage)
  const [totPage, setTotPage] = useState<number>(totalPages)
  const [cardsData, setCardsData] = useCardData(results)

  return (<>
    <HeroBlock {...hero} />
    <DeckBlock position={2} cards={cardsData} />
  </>)
}

export default ContentLandingPage