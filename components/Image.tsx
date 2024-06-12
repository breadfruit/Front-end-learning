import NextImage, { ImageProps } from 'next/image'

const Image = ({ ...rest }: ImageProps) => {
  const { src, ...res } = rest
  const baseUrl = process.env.NODE_ENV === 'production' ? '/Front-end-learning' : ''
  return <NextImage {...res} src={`${baseUrl}${src}`} />
}

export default Image
