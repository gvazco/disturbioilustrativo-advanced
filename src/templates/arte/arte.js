import React from "react"
import { Grid, Image, Button, Label } from "semantic-ui-react"
import BlogLayout from "../../layouts/BlogLayout"
import "./arte.scss"
import Seo from "../../components/seo"

export default function Arte(props) {
  const { pageContext } = props
  const { data: arte } = pageContext

  return (
    <BlogLayout className="arte">
      <Seo title={arte.Seo.seotitle} description={arte.Seo.seodescription} />

      <div className="markdown-body">
        <div className="prod-excerpt">
          <h1>{arte.title}</h1>

          <Grid>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <Image src={arte.featuredImage.node.localFile.publicURL} />
              <Grid.Row className="buttons">
                {/* <Button
                  positive
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Cotizar ahora
                </Button> */}
              </Grid.Row>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={8}>
              <p dangerouslySetInnerHTML={{ __html: arte.content }}></p>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </BlogLayout>
  )
}
