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

export interface TextBlockApi {
    __component:         string;
    id:                  number;
    richText:            string;
    title:               string;
    textPosition:        string;
    buttonGroupPosition: string;
    buttonColorScheme:   string;
    buttonVariant:       string;
    style:               string;
    cta:                 Cta[];
}

export interface MediaBlockApi {
    __component:        string;
    id:                 number;
    heading:            string;
    text:               string;
    setBackgroundImage: boolean;
    imageAlt:           string;
    textPosition:       string;
    youTubeVideo:       YouTubeVideo;
    image:              Image;
}
export interface YouTubeVideo {
    id:    number;
    key:   string;
    label: string;
}

export interface StackBlockApi {
    __component:    string;
    id:             number;
    heading:        string;
    headingAligned: null;
    reverse:        null;
    layers:         Layer[];
}

export interface Layer {
    id:        number;
    title:     string;
    text:      string;
    textAlign: null;
    reverse:   null;
    imageAlt:  string;
    Image: Image;
}
