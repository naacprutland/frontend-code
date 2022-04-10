import { CTA } from "../interface/general";
import { GlobalApi } from "../interface/globalApi";
import { SiteConfig } from "../interface/siteConfig";

function convertToConfig({ 
    logo,
    seo,
    navigation = {
        'main-navigation': [],
        'call-to-actions': []
    } 
} : GlobalApi): SiteConfig {
    const btn = [ {
        color: 'prime1',
        textColor: 'white'
    },
    {
        color: 'prime2',
        textColor: 'prime1.500'
    }]
    const ctas: CTA[] =  navigation['call-to-actions'].map((cta, i) => {
        return {
            label: cta.title,
            path: cta.path,
            external: cta.type === "EXTERNAL" ,
            style: "solid",
            color: btn[i].color,
            textColor: btn[i].textColor
        }
    })
    return {
        defaultSeo: {
            title: seo?.metaTitle || "",
            description: seo?.metaDescription || "",
            canonical: seo?.canonicalURL || "",
            openGraph: {
                url: '',
                title: '',
                description: '',
                site_name: '',
                images:[]
            }
        },
        headerProps: {
            logo: {
                src: logo?.src?.url || "",
                alt: logo?.alt || ""
            },
            ctas,
            mega_menu: [],
            fixed: true,
            banners:[]
        }
    }
}


export default convertToConfig