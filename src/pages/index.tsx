import ContentPage from '../components/ContentPage'
import { getPageProps } from '../lib/pageProps'
import {  PageProps } from '../interface/page'

const HomePage = (Props: PageProps) => (
  <>
    <div>Hello world</div>
    <ContentPage {...Props} />
  </>
)

export const getStaticProps = async ({ preview }) => getPageProps('homePageKey', preview);

export default HomePage
