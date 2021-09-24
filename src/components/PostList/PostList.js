import React from "react"
import { Grid, Card, Icon, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import { map } from "lodash"
// import moment from "moment"
// import "moment/locale/es"
import "./PostList.scss"

export default function PostList(props) {
  const { posts } = props
  console.log(posts)

  return (
    <Grid className="post-list">
      {map(posts, post => (
        <Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
          <Link to={`/blog/${post.slug}`}>
            <Card className="post-list__item">
              <Image src={post.featuredImage.node.localFile.publicURL} />
              <Card.Content>
                <Card.Header>{post.title}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Card.Meta>
                  <Icon name="file text" />
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      ))}
    </Grid>
  )
}
