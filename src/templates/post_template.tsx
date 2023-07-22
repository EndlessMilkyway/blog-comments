import { FunctionComponent } from 'react'
import Template from 'components/Common/Template'
import { graphql } from 'gatsby'
import PostHead from 'components/Post/PostHead'
import { PostFrontmatterType } from 'types/PostItem.types'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import { SEO } from 'components/Common/seo'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

type PostPageSEOProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
  } = edges[0]

  // seoTitle = title
  // seoDesc = summary
  // seoImg = publicURL

  return (
    <Template>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

export const Head = ({
  location: { href },
  data: {
    allMarkdownRemark: { edges },
  },
}: PostPageSEOProps) => (
  <SEO
    title={edges[0].node.frontmatter.title}
    description={edges[0].node.frontmatter.summary}
    url={href}
    image={edges[0].node.frontmatter.thumbnail.publicURL}
  />
)

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}
