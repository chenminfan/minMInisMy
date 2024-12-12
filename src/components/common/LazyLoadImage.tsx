import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderImage from "../../assets/image/background/background-02.png";

type LazyLoadImgType = {
  className: string,
  alt: string,
  src: string,
  placeholdersrc?: string,
  width?: number,
  height?: number,
}
const LazyLoadImg = (props: LazyLoadImgType) => {
  const { alt, src, className, placeholdersrc } = props
  return (
    <LazyLoadImage
      alt={alt}
      src={src} // use normal <img> attributes as props
      className={className}
      placeholderSrc={PlaceholderImage}
      effect="blur"
    />
  )
}

export default LazyLoadImg
