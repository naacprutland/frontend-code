export interface SEO {
    title: string;
    description: string;
    canonical: string;
    openGraph: {
        url: string;
        title: string;
        description: string;
        site_name: string;
        images: {
            url: string;
            width?: number;
            height?: number;
            alt?: string;
        }[]
    }
}