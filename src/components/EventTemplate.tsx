import HeroTwoBlock from './HeroTwoBlock'
import Breadcrumbs, { Breadcrumb } from './Breadcrumbs'
import TextBlock from './TextBlock'
import { Image } from '../interface/generalApi'
import { CTABtn } from './HeroBlock'

export interface EventTemplateProps {
    title: string
    description: string
    breadcrumbs: Breadcrumb[]
    date: string
    time?: string
    location: string
    rsvp?: CTABtn
    image: Image
    imageAlt: string
}

const EventTemplate = ({
    title,
    description,
    breadcrumbs,
    date,
    time,
    location,
    rsvp,
    image,
    imageAlt
}: EventTemplateProps) => {
    return (
        <>
            <HeroTwoBlock position={0}
                title={title}
                imgSrc={image.url}
                imgAlt={imageAlt}
                subText1={date}
                subText2={time}
                cta={rsvp}
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