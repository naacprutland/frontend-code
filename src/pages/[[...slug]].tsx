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

export const getStaticProps = async ({ preview, previewData, params }) => {
  const location = params?.slug ? params.slug.join('__') : 'home'

  return getPageProps(location, preview, previewData);

}

export default DynamicPage
