import { useSiteMetadata } from 'hooks/useSiteMetadata'
import React, { ReactNode } from 'react'
import google from '../../secret/googleSEOKey'
import naver from '../../secret/naverSEOKey'

type SEOProps = {
  title?: string
  description?: string
  url: string
  image: string
  children?: ReactNode
}

export const SEO = ({ title, description, url, image, children }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: url,
    image: image,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale: 1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />

      <meta name="twitter:card" content="summart" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <meta name="google-site-verification" content={google.apikey} />
      <meta name="naver-site-verification" content={naver.apiKey} />

      <html lang="ko" />

      {children}
    </>
  )
}
