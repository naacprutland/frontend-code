import { getPageProps } from '../lib/pageProps'
import HeroBlock from '../components/HeroBlock'
import TextBlock from '../components/TextBlock'
import DeckBlock, { DeckBlockProps } from '../components/DeckBlock'
import { SEO } from '../interface/seo'
import { 
  HeroBlock as HeroBlockProps,
  TextBlock as TextBlockProps
} from '../interface/componentBlock'
import getAllBlogPost from '../lib/getAllBlogList'

interface Props {
  file: {
    data: {
      pageSEO: SEO;
      components: {
        heroBlock: HeroBlockProps,
        textBlock: TextBlockProps
      }
    }
  },
  deckProps: DeckBlockProps
}

const Blog = ({ file, deckProps }: Props) => {
  const heroProps = file?.data?.components?.heroBlock
  const textProps = file?.data?.components?.textBlock
  return <>
    {heroProps && <HeroBlock {...heroProps} />}
    {textProps && <TextBlock {...textProps} />}
    {deckProps && <DeckBlock {...deckProps} />}
  </>
}

export const getStaticProps = async () => {
  const test = await getAllBlogPost();
  const cards = []
  for (const id of test) {
    const content = await import(`../data/pages/${id}.json`);
    const fullData = content?.default
    const data = {
      image: fullData.thumbnail,
      title: fullData.title,
      copy: fullData.description,
      link: {
        label: 'Read Blog',
        path: `${id.replace("_", "/")}`,
        isExternal: false
      }
    }
    cards.push(data)
  }
  const props = await getPageProps('blog')

  return {
    props: {
      ...props.props,
      deckProps: {
        cards,
        layout: 'rows'
      }
    }
  }
}

export default Blog
