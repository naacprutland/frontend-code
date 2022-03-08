import { MobileMenuProps } from '../../components/MobileMenu'

export const primary: Partial<MobileMenuProps> = {
    ctas: [
        {
            label: 'Donate',
            path: '/donate',
            external: false,
            style: 'solid',
            color: 'prime1',
            textColor: 'white'
        },
        {
            label: 'Join Us',
            path: '/membership',
            external: false,
            style: 'solid',
            color: 'prime2',
            textColor: 'prime1'
        }
    ],
    megaMenu: [
      {
        label: 'about',
        path: '/about',
        external: false,
        subitems: [
            {
                label: 'view about us',
                path: '/about',
                external: false,
            },
            {
                label: 'Leadership',
                path: '/leadership',
                external: false,
            }
        ]
      },
      {
        label: 'become a member',
        path: '/member',
        external: false,
        subitems: [
            {
                label: 'view about us',
                path: '/about',
                external: false,
            },
            {
                label: 'Leadership',
                path: '/leadership',
                external: false,
            }
        ]
      },
      {
        label: 'blog',
        path: '/blog',
        external: false 
      },
      {
        label: 'Resources',
        path: '/resources',
        external: false 
      },
      {
        label: 'contact us',
        path: 'https://www.google.com',
        external: true
      }
    ],
    isOpen: true
}