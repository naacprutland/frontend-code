export interface OpenGraph {
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

export interface SEO {
    title: string;
    description: string;
    canonical: string;
    openGraph: OpenGraph;
}