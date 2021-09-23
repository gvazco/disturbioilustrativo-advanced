import React from "react"
import BlogLayout from "../../layouts/BlogLayout"
import { Icon } from "semantic-ui-react"
import moment from "moment"
import "moment/locale/es"
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import "./proyecto.scss"
// import Seo from "../../components/seo"

export default function Proyecto(props) {
  const { pageContext } = props
  const { data: proyecto } = pageContext

  return (
    <BlogLayout className="proyecto">
      {/* <Seo
        title={proyecto.Seo.seotitle}
        description={proyecto.Seo.seodescription}
        image={proyecto.featuredImage.node.localFile.publicURL}
      /> */}

      <div className="markdown-body">
        <h1>{proyecto.title}</h1>

        <span>
          <Icon name="calendar alternate outline" />
        </span>

        <h3 className="place">
          <Icon name="map marker alternate" />
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(proyecto.content),
          }}
        />
      </div>
    </BlogLayout>
  )
}
