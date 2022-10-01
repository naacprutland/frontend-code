import { useMemo } from 'react'
import HeroTwoBlock from './HeroTwoBlock'
import Breadcrumbs, { Breadcrumb } from './Breadcrumbs'
import TextBlock from './TextBlock'
import { Image } from '../interface/generalApi'

export interface EventTemplateProps {
    title: string
    description: string
    date: Date
    startTime?: string
    endTime?: string
    host: string
    location: string
    rsvp?: string
    image: Image
    imageAlt: string
}

const breadcrumbs: Breadcrumb[] = [
    {
        path: '/',
        label: 'home'
    },
    {
        path: 'event',
        label: 'event'
    }
]



const EventTemplate = ({
    title,
    description,
    date,
    startTime,
    endTime,
    location,
    rsvp,
    image,
    imageAlt
}: EventTemplateProps) => {
    const rsvpCTA = useMemo(() => {
        if (rsvp) {
            return {
                label: "RSVP",
                link: `mailto: ${rsvp}`,
                external: false
            }
        }
        return null
    }, [rsvp]);
    return (
        <>
            <HeroTwoBlock position={0}
                title={title}
                imgSrc={image.url}
                imgAlt={imageAlt}
                subText1={date.getDate().toString()}
                subText2={`${startTime} - ${endTime}`}
                cta={rsvpCTA}
            />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <TextBlock
                position={1}
                title="Event Location"
                richText={location} />
            <TextBlock
                position={2}
                title="Event Description"
                richText={description} />
        </>
    )
}

export default EventTemplate