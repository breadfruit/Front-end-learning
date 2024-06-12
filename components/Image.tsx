import NextImage, { ImageProps } from 'next/image'

const Image = ({ ...rest }: ImageProps) => {
  const { src, ...res } = rest
  return <NextImage {...res} src={`/Front-end-learning${src}`} />
}

export default Image
