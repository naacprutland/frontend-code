import { getPageProps } from '../lib/pageProps'
import {  PageProps } from '../interface/page'
import PageTemplate from '../components/PageTemplate'

const HomePage = (Props: PageProps) => (
  <PageTemplate {...Props.data}/>
)

export const getStaticProps = async ({ preview }) => getPageProps('homePageKey', preview);

export default HomePage
