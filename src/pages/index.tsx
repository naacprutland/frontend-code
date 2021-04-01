import { NextSeo } from 'next-seo'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { formOptions } from '../data/tinaForms/homeForm'
import { HomePage } from '../interface/homePage'
import DynamicComponent from '../components/DynamicComponent'

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

  return (
  <>
    <NextSeo {...data.pageSEO} />
    {data.pageBlocks.map((cProps, i) => {
      return <DynamicComponent 
        key={`${cProps}${i}`}
        {...cProps} pagePos={i}/>
     })}
  </>
)}

// /**
//  * Fetch data with getStaticProps based on 'preview' mode
//  */
export const getStaticProps: GetStaticProps = async function({
  preview = false,
  previewData,
 }) {
  if (preview) {

    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: './src/data/pages/home.json',
      parse: parseJson,
    })
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: './src/data/pages/home.json',
        data: (await import('../data/pages/home.json')).default,
      }
    },
  }
 }

export default Index
