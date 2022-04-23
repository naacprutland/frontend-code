
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