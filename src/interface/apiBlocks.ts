import { Image } from './generalApi'

export interface HeroBlockApi {
    __component: string;
    id:          number;
    template:    string;
    title:       string;
    horPos:      string;
    verPos:      string;
    textPos:     string;
    size:        string;
    imageAlt:    string;
    cta:         Cta[];
    image:       Image;
}

export interface Cta {
    id:       number;
    label:    string;
    link:     string;
    external: boolean;
}