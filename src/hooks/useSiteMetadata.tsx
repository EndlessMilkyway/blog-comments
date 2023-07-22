import { graphql, useStaticQuery } from 'gatsby'

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string
      description: string
      twitterUsername: string
    }
  }
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<QueryTypes>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}
