import { NextSeo } from 'next-seo'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { formOptions } from '../data/tinaForms/homeForm'
import { HomePage } from '../interface/homePage'
import DynamicComponent from '../components/DynamicComponent'
import { getPageProps } from '../lib/pageProps'

interface Props {
  preview: boolean;
  file: {
    fileRelativePath: string;
    sha: string;
    data: HomePage;
  }
}

const Index = ({ file, preview }: Props) => {
  let data: HomePage = file.data
  // Registers a JSON Tina Form
  if (preview) {
    const [dataForm, form] = useGithubJsonForm(file, formOptions)
    data = dataForm;
    usePlugin(form)
    useGithubToolbarPlugins()
  }
  console.log(data)
  return (
  <>
    <NextSeo {...data.pageSEO} />
    {data?.pageBlocks?.map((cProps, i) => {
      return <DynamicComponent 
        key={`${cProps}${i}`}
        {...cProps} pagePos={i}/>
     })}
  </>
)}

 export const getStaticProps = async ({ preview, previewData }) =>
 getPageProps('home', preview, previewData);

export default Index
