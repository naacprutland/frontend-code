import { getPageProps } from '../lib/pageProps'
import HeroBlock from '../components/HeroBlock'
import TextBlock from '../components/TextBlock'
import { SEO } from '../interface/seo'
import { 
  HeroBlock as HeroBlockProps,
  TextBlock as TextBlockProps
} from '../interface/componentBlock'

interface Props {
  file: {
    data: {
      pageSEO: SEO;
      components: {
        heroBlock: HeroBlockProps,
        textBlock: TextBlockProps
      }
    }
  }
}

const Blog = ({ file }: Props) => {
  const heroProps = file?.data?.components?.heroBlock
  const textProps = file?.data?.components?.textBlock
  // eslint-disable-next-line no-console
  console.log(textProps)
  return <>
    {heroProps && <HeroBlock {...heroProps} />}
    {textProps && <TextBlock {...textProps} />}
  </>
}

export const getStaticProps = async () => getPageProps('blog');

export default Blog
