import React from "react"
import { graphql } from "gatsby"
import { Header } from "semantic-ui-react"
import Pagination from "../components/Pagination"
import BlogLayout from "../layouts/BlogLayout"
import ProjectList from "../components/PojectList"
import Seo from "../components/seo"

export default function Portafolio(props) {
  const { data, pageContext } = props
  const proyectos = data.allWpProyecto.nodes

  return (
    <BlogLayout>
      <Seo
        title="Portafólio de Artes y Trabajos"
        description="Muestra de proyectos realizados durante los últimos meses."
      />
      <Header
        as="h2"
        textAlign="center"
        content="NUESTRO TRABAJO"
        style={{ marginTop: "1.5em" }}
        id="artes-list"
      />
      <ProjectList proyectos={proyectos} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  )
}
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpProyecto(
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        slug
        Seo {
          seodescription
          seotitle
        }
        Proyectos {
          cliente
        }
        author {
          node {
            name
          }
        }
        content
        excerpt
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
      }
    }
  }
`
