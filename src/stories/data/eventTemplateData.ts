import { EventTemplateProps } from '../../components/EventTemplate'
import { imageApi } from './cardData'

export const basicData: EventTemplateProps = {
  title: 'SENSE OF PLACE: YOGA SERIES WITH SASHA FINNELL',
  description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac porta arcu tortor tristique scelerisque phasellus nulla eget. Neque turpis tincidunt elit dictum faucibus. Purus ac tortor facilisi vitae velit morbi posuere sit. Dolor risus commodo parturient amet dui facilisi ac magna. Consequat platea semper in venenatis pharetra mauris elementum fermentum. Diam ut sit nullam sollicitudin. Enim commodo quis quam sit tempus sem habitant varius. Fames egestas eget massa augue quam arcu mauris, senectus. Et massa egestas a, mattis arcu sed. Id nisl et ut praesent ac dolor nam. Est sit ipsum aliquet non enim bibendum quam sagittis. Vulputate est mauris vel a tellus tristique nisl, duis id. Aliquam pellentesque duis orci, quis phasellus mi convallis enim scelerisque. Porta ullamcorper ac quam feugiat.</p>
<p>Dignissim pulvinar aliquam viverra velit nibh et commodo, justo scelerisque. Nulla ultricies et aenean eu nunc sed purus donec at. Sollicitudin quam non commodo accumsan, nisl. Quis faucibus dignissim eget urna. Vitae elementum suspendisse pharetra feugiat. Ac fringilla nam cursus tincidunt vestibulum pellentesque nascetur et mus. Est volutpat sapien cursus porttitor volutpat id tellus consequat duis. Sit hendrerit dui turpis tortor amet. In magna ridiculus est magnis. Pharetra consectetur ultrices tortor turpis. Eu pellentesque sit dui amet molestie massa sit.</p>
<p></p>Odio urna, non dictum id tempor mollis tincidunt. Tempor venenatis metus, fermentum semper. Quisque ultricies vitae sed sed consequat. Habitant posuere semper quis velit pellentesque leo. Sed gravida dignissim facilisis fermentum ut ultrices vestibulum. Tortor, nulla diam accumsan quis amet. Ornare neque, mi nulla mauris.</p>`,
  breadcrumbs: [
    {
      path: '/',
      label: 'home',
    },
    {
      path: 'calender',
      label: 'calender',
    },
  ],
  date: 'Wednesday  |  November 22, 2022',
  time: '2:00pm - 5:00pm',
  location: '178 Conservation Way. Sunderland, Vermont 05250-4465',
  image: imageApi,
  imageAlt: 'test alt',
  rsvp: {
    label: 'RSVP',
    link: 'mailto: abc@example.com',
    external: false,
  },
}
