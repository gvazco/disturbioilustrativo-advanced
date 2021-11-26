import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//Components
import Layout from "../components/Layout/Layout"
import PageHero from "../components/PageHero/PageHero"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PageSidebar from "../components/PageSidebar/PageSideBar"
import TransformOembedToIframe from "../utils/TransformOembedToIframe"

const Img = styled.div`
  div.gatsby-image-wrapper {
    max-height: 250px !important;
  }
`

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 20px;
  max-width: 800px;

  h1 {
    line-height: 45px;
    font-weight: 600;
  }

  a {
    color: #fff;
  }

  a:hover {
    color: #000;
  }

  iframe {
    width: 100%;
  }
`

const PageTemplate = ({ data }) => (
  <Layout>
    <Img>
      {data.wpPage.featuredImage ? (
        <PageHero
          img={
            data.wpPage.featuredImage.node.localFile.childImageSharp
              .gatsbyImageData
          }
        />
      ) : null}
    </Img>
    <Wrapper>
      <BreadCrumb parent={data.wpPage.wpParent && data.wpPage.wpParent.node} />

      <ContentWrapper>
        <PageSidebar
          parentChildren={
            data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes
          }
          currentPage={data.wpPage}
          parent={data.wpPage.wpParent && data.wpPage.wpParent.node.title}
        >
          {data.wpPage.wpChildren}
        </PageSidebar>
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />

          <div
            dangerouslySetInnerHTML={{
              __html: TransformOembedToIframe(data.wpPage.content),
            }}
          />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`
