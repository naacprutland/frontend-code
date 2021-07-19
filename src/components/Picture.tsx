import { useRef } from 'react'
import useIntersectionObserver from '../hooks/intersectionObserver';

export interface Source {
  srcset: string;
  media: string;
}

interface Props {
  className: string;
  src: string;
  alt: string;
  sources: Source[];
}

const Picture = ({ sources, className = '', src, alt }: Props) => {
  const pic = useRef(null);
  const isPicVisible = useIntersectionObserver(pic);
  return (
    <picture className={className} ref={pic}>
      {sources && sources.map(val => (
        <>
          <source {...val}></source>
        </>
      ))}
      <img src={isPicVisible ? src : ''} alt={alt} />
    </picture>
  );
}

export default Picture