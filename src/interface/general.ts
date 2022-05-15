
export interface CTA {
    label: string;
    path: string;
    external: boolean;
    style?: 'outline' | 'solid';
    color?: string;
    textColor?: string;
}

export interface Link {
    label: string;
    path: string;
    external: boolean;
}

export interface SocialLink {
    icon: 'facebook' | 'instagram' | 'linkedIn' | 'github' | 'tiktok' | 'twitter' | 'reddit' | 'snapchat' | 'twitch';
    path: string;
}

export type StyleType = 'none' | 'white' | 'dark' | 'blue' | 'yellow'

export type ColorScheme =
    'prime1'
    | 'prime2'
    | 'secondary1'
    | 'secondary2'
    | 'secondary3'
    | 'secondary4'
    | 'secondary5'
    | 'secondary6'
    | 'secondary7'
    | 'tertiary1'
    | 'tertiary2'
    | 'tertiary3'