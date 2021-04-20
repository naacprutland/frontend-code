import ContentPage from '../components/ContentPage'
import { getPageProps } from '../lib/pageProps'
import { PageProps } from '../interface/page'

const Index = (Props: PageProps) => (
  <ContentPage {...Props} />
)

 export const getStaticProps = async ({ preview, previewData }) =>
 getPageProps('home', preview, previewData);

export default Index
