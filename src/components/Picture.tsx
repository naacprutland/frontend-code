import { useRef } from 'react'
import useIntersectionObserver from '../hooks/intersectionObserver';

export interface Source {
  srcset: string;
  media?: string;
}

interface Props {
  picClass?: string;
  imgClass?: string;
  noLazyLoad?: boolean;
  src: string;
  alt: string;
  sources: Source[];
}

const Picture = ({ sources, picClass = '', imgClass = '', src, alt, noLazyLoad = false }: Props) => {
  const pic = useRef(null);
  const isPicVisible = noLazyLoad || useIntersectionObserver(pic);
  return (
    <picture className={picClass} ref={pic}>
      {sources && sources.map((val, i) => (
          <source key={val.srcset + i} srcSet={val.srcset} media={val.media} />
      ))}
      {isPicVisible &&  <img className={imgClass} src={src} alt={alt} />}
      <style jsx>{`
        picture {
          height: 100%;
          width: 100%;
        }

        img {
          height: 100%;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }
     `}</style>
    </picture>
  );
}

export default Picture