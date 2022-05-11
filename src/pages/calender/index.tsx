import { getPageProps } from '../../lib/pageProps'
import {  PageProps } from '../../interface/page'
import PageTemplate from '../../components/PageTemplate'

const CalenderPage = (Props: PageProps) => (
  <PageTemplate {...Props.data}/>
)

export const getStaticProps = async ({ preview }) => getPageProps('calenderPageKey', preview);

export default CalenderPage 