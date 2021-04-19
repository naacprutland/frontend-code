import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { formOptions } from '../tinaForms/homeForm'
import PageTemplate from './PageTemplate'
import { PageProps } from '../interface/page'


const PageEditor = ({ file }: PageProps) => {
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form)
  useGithubToolbarPlugins()

  return <PageTemplate {...data} />
}

export default PageEditor
