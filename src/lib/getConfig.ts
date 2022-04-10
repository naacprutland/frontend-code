
import { FooterProps } from "../components/Footer";
import { MenuItem } from "../components/Header";
import { CTA } from "../interface/general";
import { GlobalApi, NavItem } from "../interface/globalApi";
import { SiteConfig } from "../interface/siteConfig";

function mainMenu(navItems: NavItem[]) {
    const menu: MenuItem[] = []

    for (const item of navItems) {
        if (!item.parent) {
            const path = item.related ? item.related.path : 
                item.type === "EXTERNAL" ? item.externalPath : item.path
            menu.push({
                label: item.title,
                path,
                external: item.type === "EXTERNAL",
                subitems: []
            } as MenuItem)
        }
    }

    return menu
}

function convertToConfig({ 
    logo,
    seo,
    footer,
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

    const mega_menu: MenuItem[] =  mainMenu(navigation['main-navigation'])

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
            mega_menu,
            fixed: true,
            banners:[]
        }, 
        footerProps: footer as FooterProps
    }
}


export default convertToConfig