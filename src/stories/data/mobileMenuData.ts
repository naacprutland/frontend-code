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
            textColor: 'prime1.500'
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
                path: 'https://www.google.com',
                external: true,
            }
        ]
      },
      {
        label: 'become a member',
        path: '/member',
        external: false,
        subitems: [
            {
                label: 'view become a member',
                path: '/about',
                external: false,
            },
            {
                label: 'Renew Membership',
                path: '/leadership',
                external: false,
            }
        ]
      },
      {
        label: 'Get Help',
        path: '/gethelp',
        external: false ,
        subitems: [
            {
                label: 'file a complaint',
                path: '/about',
                external: false,
            },
        ]
      },
      {
        label: 'Resources',
        path: '/resources',
        external: false 
      },
      {
        label: 'Calender',
        path: '/calender',
        external: false 
      },
      {
        label: 'Bulletin',
        path: '/bulletin',
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