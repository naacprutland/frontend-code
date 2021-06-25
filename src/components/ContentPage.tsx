import { PageProps } from '../interface/page'
import PageTemplate from '../components/PageTemplate'


const ContentPage = ({ file }: PageProps) => {
  return <PageTemplate {...file?.data}/>
}

export default ContentPage
