import ContentPage from '../components/ContentPage'
import { getPageProps, getPathsList } from '../lib/pageProps'
import {  PageProps } from '../interface/page'

const DynamicPage = (Props: PageProps) => (
  <ContentPage {...Props} />
)

export async function getStaticPaths() {
  const paths = await getPathsList();
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params, preview}) => {
  const location = params?.slug ? params.slug.pop()  : 'home'

  return getPageProps(location, preview);

}

export default DynamicPage
