import apiEndPoints from "./strapiApi"
import { stringify } from 'qs'
import { fetchApi } from './util'
import { SearchApi, DatumAttributes } from "../interface/apiSearch";
import { CardProps } from "../components/Card";

export const cardBuilder = (data: DatumAttributes): CardProps => {
    return {
        title: data?.seo?.metaTitle,
        copy: data?.seo?.metaDescription,
        link: {
            label: 'Read On',
            path: data.path,
            isExternal: false
        },
        image: {
            src: data?.seo?.metaImage?.data?.attributes,
            alt: data?.seo?.metaTitle
        }
    }
}

export const  getPageSearch = async (key: string, pageParam = 1) => {
    const query = stringify({
        populate:{
            seo: {
                populate: {
                    metaTitle: true,
                    metaDescription:true,
                    metaImage: '*'
                }
            }
        },
        filters: {
            $or: [
                {
                    slug: {
                        $containsi: key,
                    },
                },
                {
                    seo: {
                        metaTitle: {
                            $containsi: key,
                        },
                    },
                },
                {
                    seo: {
                        metaDescription: {
                            $containsi: key,
                        },
                    },
                }
            ],
            seo: {
                metaTitle: {
                    $notNull: true
                }
            }   
        },
        pagination: {
            page: pageParam,
            pageSize: 20,
          }
      }, {
        encodeValuesOnly: true,
      });
    const json: SearchApi = await fetchApi(`${apiEndPoints.getPages}?$${query}`)
    return json.data.map(page => cardBuilder(page.attributes))
}