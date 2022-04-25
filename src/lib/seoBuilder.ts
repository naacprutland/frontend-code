import { NextSeoProps } from 'next-seo';
import { SEOApi } from '../interface/apiSeo'

export const seoBuilder = ({
    metaTitle,
    metaDescription,
    metaRobots='',
    // metaSocial=[],
    canonicalURL,
    metaImage
}: SEOApi):NextSeoProps => {

    const images = metaImage?.formats ? Object.keys(metaImage?.formats).map(v => {
        return {
            url: metaImage?.formats[v].url || '',
            width: metaImage?.formats[v].width,
            height: metaImage?.formats[v].height,
            alt: metaImage?.alternativeText,
        }
    }) : []

    return {
        title: metaTitle,
        description: metaDescription,
        canonical: canonicalURL,
        noindex: metaRobots?.includes('noindex') || false,
        nofollow: metaRobots?.includes('nofollow') || false,
        openGraph: {
            type: 'website',
            url: canonicalURL,
            title: metaTitle,
            description: metaDescription,
            images
        }
    }
}
