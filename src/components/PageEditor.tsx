import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import PageTemplate from './PageTemplate'
import { PageProps } from '../interface/page'
import { formOptions } from '../tinaForms/contentPageForm'

const PageEditor = ({ file, formTitle }: PageProps) => {
  const [data, form] = useGithubJsonForm(file, formOptions(formTitle));
  usePlugin(form)
  useGithubToolbarPlugins()

  return <PageTemplate {...data} />
}

export default PageEditor
