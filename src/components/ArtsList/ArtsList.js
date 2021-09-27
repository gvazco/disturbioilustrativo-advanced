import React from "react"
import { Grid, Card, Icon, Image, Button, CardC } from "semantic-ui-react"
import { Link } from "gatsby"
import { map } from "lodash"
import "./ArtsList.scss"

export default function ArtsList(props) {
  const { artes } = props

  return (
    <Grid className="artes-list">
      {map(artes, arte => (
        <Grid.Column key={arte.id} mobile={16} tablet={16} computer={5}>
          <Card className="artes-list__item">
            <Link to={arte.Artes.url}>
              <Image src={arte.featuredImage.node.localFile.publicURL} />
            </Link>
            <Card.Content>
              <Card.Header>
                <Link to={arte.Artes.url}>{arte.title}</Link>
              </Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  )
}
