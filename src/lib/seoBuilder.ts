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

    return {
        title: metaTitle,
        description: metaDescription,
        canonical: canonicalURL,
        noindex: metaRobots?.includes('noindex'),
        nofollow: metaRobots?.includes('nofollow'),
        openGraph: {
            type: 'website',
            url: canonicalURL,
            title: metaTitle,
            description: metaDescription,
            images: [
                {
                    url: metaImage?.formats?.medium?.url || '',
                    width: metaImage?.formats?.medium?.width,
                    height: metaImage?.formats?.medium?.height,
                    alt: metaImage?.alternativeText,
                },
                {
                    url: metaImage?.formats?.small?.url || '',
                    width: metaImage?.formats?.small?.width,
                    height: metaImage?.formats?.small?.height,
                    alt: metaImage?.alternativeText,
                },
                {
                    url: metaImage?.formats?.thumbnail?.url || '',
                    width: metaImage?.formats?.thumbnail?.width,
                    height: metaImage?.formats?.thumbnail.height,
                    alt: metaImage?.alternativeText,
                },
            ],
        }
    }
}
