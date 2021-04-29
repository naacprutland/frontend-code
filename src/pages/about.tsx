import ContentPage from '../components/ContentPage'
import { getPageProps } from '../lib/pageProps'
import { PageProps } from '../interface/page'

const About = (Props: PageProps) => (
  <ContentPage {...Props} />
)

export const getStaticProps = async ({ preview, previewData }) =>
 getPageProps('About', preview, previewData);

export default About
