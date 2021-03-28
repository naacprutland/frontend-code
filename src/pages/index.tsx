import {
  Link as ChakraLink,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react"
import { AiFillCheckCircle, AiOutlineLink } from "react-icons/ai"
import Hero from '../components/Hero'
import { NextSeo } from 'next-seo'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { SEO } from '../interface/seo'
import { formOptions } from '../data/tinaForms/homeForm'
import { HomePage } from '../interface/homePage'

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
    <Hero />
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
