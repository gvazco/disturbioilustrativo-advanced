import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../layouts/BlogLayout"
import PostList from "../components/PostList"
import Pagination from "../components/Pagination"
import Seo from "../components/seo"
import imageBlog from "../images/icon.png"

export default function Blog(props) {
  const { data, pageContext } = props
  const posts = data.allWpPost.nodes

  return (
    <BlogLayout>
      <Seo
        title="Portafolio de Alexis Velázquez"
        description="Muestra de mis mejores trabajos profesionales."
        image={imageBlog}
      />
      <PostList posts={posts} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpPost(skip: $skip, limit: $limit, sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        content
        slug
        date
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
