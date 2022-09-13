import PageTemplate from '../components/PageTemplate'
import { getPageProps, getPathsList } from '../lib/pageProps'
import { PageProps } from '../interface/page'

const DynamicPage = (Props: PageProps) => (
  <PageTemplate {...Props.data} preview={Props.preview} />
)

export async function getStaticPaths() {
  const paths = await getPathsList();
  return { paths, fallback: true };
}

export const getStaticProps = async ({ params, preview }) => {
  const location = params.slug?.pop() || ''

  return getPageProps(location, preview);

}

export default DynamicPage
