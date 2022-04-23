import originalUrl from '../../../public/librarygirl.jpg'
import { HeroTwoBlockProps } from '../../components/HeroTwoBlock'

export const heroData: HeroTwoBlockProps = {
    title: "Join The Cause",
    imgSrc: originalUrl as unknown as string,
    imgAlt: "member",
    position: 0,
    cta: {
        label: "Become A Member",
        link: "/about",
        external: false
    }
}

export const detailTextData: HeroTwoBlockProps = {
    ...heroData,
    subText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia eu sit vulputate ultrices facilisi ut id nisl. Varius ullamcorper at dui tempor sed sem. Vitae eget et scelerisque odio blandit vulputate pharetra, amet."
}

export const eventData: HeroTwoBlockProps = {
    ...heroData,
    title: "SENSE OF PLACE: YOGA SERIES WITH SASHA FINNELL",
    subText1: "Wednesday  |  November 22, 2022",
    subText2: "2:00pm - 5:00pm",
    cta: {
        label: "RSVP",
        link: "mailto: abc@example.com",
        external: false
    }
}

export const titleOnly: HeroTwoBlockProps = {
    title: "Join The Cause",
    imgSrc: originalUrl as unknown as string,
    imgAlt: "member",
}