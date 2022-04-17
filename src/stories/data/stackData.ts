import { StackProps } from '../../components/Stack'
import originalUrl from '../../../public/justice.jpg'

export const stackData: StackProps = {
    img: {
        src: originalUrl as unknown as string,
        alt: "justice"
    },
    title: "Race & Justice",
    text: "<p>Black people make up a little more then 1% of the states’s population,</p><p>but up to <strong>8.5%</strong> of VT prisoners</p>",
    textAlign: "start",
};

export const stackDataReverse: StackProps = {
    ...stackData,
    reverse: true
}