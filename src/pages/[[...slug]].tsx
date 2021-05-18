import ContentPage from '../components/ContentPage'
import { getPageProps } from '../lib/pageProps'
import {  PageProps } from '../interface/page'

const DynamicPage = (Props: PageProps) => (
  <ContentPage {...Props} />
)

export async function getStaticPaths() {
  const paths = [
    {
      params: { slug:  ['about']},
    },

  ];
  return { paths, fallback: true };
}

export const getStaticProps = async ({ preview, previewData, params }) => {
  const location = params?.slug ? params.slug.join('__') : 'home'

  return getPageProps(location, preview, previewData);

}

export default DynamicPage
