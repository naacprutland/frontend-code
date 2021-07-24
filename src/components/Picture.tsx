import { useRef } from 'react'
import useIntersectionObserver from '../hooks/intersectionObserver';

export interface Source {
  srcset: string;
  media?: string;
}

interface Props {
  picClass?: string;
  imgClass?: string;
  src: string;
  alt: string;
  sources: Source[];
}

const Picture = ({ sources, picClass = '', imgClass = '',  src, alt }: Props) => {
  const pic = useRef(null);
  const isPicVisible = useIntersectionObserver(pic);
  return (
    <picture className={picClass} ref={pic}>
      {sources && sources.map(val => (
        <>
          <source {...val}></source>
        </>
      ))}
      <img className={imgClass} src={isPicVisible ? src : ''} alt={alt} />
    </picture>
  );
}

export default Picture