import ContentPage from '../components/ContentPage'
import { getPageProps } from '../lib/pageProps'
import {  PageProps } from '../interface/page'

const HomePage = (Props: PageProps) => (
  <ContentPage {...Props} />
)

export const getStaticProps = async ({ preview }) => getPageProps('/', preview);

export default HomePage