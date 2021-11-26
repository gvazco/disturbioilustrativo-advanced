import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//Components
import Layout from "../../components/Layout/Layout"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../../components/PostSidebar/PostSidebar"
//Utils
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"

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

const PostContent = styled.article`
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
    color: #60c1aa;
  }

  iframe {
    width: 100%;
  }
`

const PostTemplate = ({ data }) => (
  <Layout>
    <Wrapper>
      <BreadCrumb parent={{ uri: "/blog/all-posts", title: "blog" }} />
      <ContentWrapper>
        <PostSidebar
          date={data.post.date}
          author={data.post.author.node.name}
          categories={data.post.categories.nodes}
        />
        <PostContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
          <div
            dangerouslySetInnerHTML={{
              __html: TransformOembedToIframe(data.post.content),
            }}
          />
        </PostContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default PostTemplate

export const PageQuery = graphql`
  query($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`
