import PageTemplate from '../components/PageTemplate';
import { getPageProps } from '../lib/pageProps'
import {  PageProps } from '../interface/page'

const PageNotFound = (Props: PageProps) => (
  <PageTemplate {...Props.data}/>
)

export const getStaticProps = async ({ preview }) => getPageProps('404', preview);

export default PageNotFound
