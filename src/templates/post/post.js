import React from "react"
import BlogLayout from "../../layouts/BlogLayout"
import { Image } from "semantic-ui-react"
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import "./post.scss"
import Seo from "../../components/seo"

export default function post(props) {
  const { pageContext } = props
  const { data: post } = pageContext

  return (
    <BlogLayout className="proyecto">
      <Seo
        title={post.title}
        description={post.title}
        image={post.featuredImage.node.localFile.publicURL}
      />

      <div className="markdown-body">
        <Image
          className="featured-img"
          src={post.featuredImage.node.localFile.publicURL}
        />
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(post.content),
          }}
        />
      </div>
    </BlogLayout>
  )
}
