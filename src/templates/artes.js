import React from "react"
import { graphql } from "gatsby"
import { Header } from "semantic-ui-react"
import Pagination from "../components/Pagination"
import BlogLayout from "../layouts/BlogLayout"
import ArtsList from "../components/ArtsList"
import Hero from "../components/Hero"
import Seo from "../components/seo"

export default function Artes(props) {
  const { data, pageContext } = props
  const artes = data.allWpArte.nodes

  return (
    <BlogLayout>
      <Seo
        title="Portafolio de Artes y Trabajos"
        description="Portafolío de Artes y Trabajos"
      />
      <Hero />
      <Header
        as="h2"
        textAlign="center"
        content="NOTICIAS DESTACADAS"
        style={{ marginTop: "1.5em" }}
        id="artes-list"
      />
      <ArtsList artes={artes} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpArte(skip: $skip, limit: $limit, sort: { fields: date, order: DESC }) {
      nodes {
        Artes {
          url
        }
        id
        slug
        Seo {
          seodescription
          seotitle
        }
        author {
          node {
            name
          }
        }
        content
        excerpt
        date
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
        slug
        title
      }
    }
  }
`
