import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import PageTemplate from './PageTemplate'
import { PageProps } from '../interface/page'


const PageEditor = ({ file, formOptions }: PageProps) => {
  console.log(formOptions)
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form)
  useGithubToolbarPlugins()

  return <PageTemplate {...data} />
}

export default PageEditor
