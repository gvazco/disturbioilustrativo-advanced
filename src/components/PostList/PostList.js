import React from "react"
import { CardColumns, Card } from "react-bootstrap"
import { Link } from "gatsby"
import { map } from "lodash"
// import moment from "moment"
// import "moment/locale/es"
import "./PostList.scss"

export default function PostList(props) {
  const { posts } = props
  console.log(posts)

  return (
    <CardColumns className="post-list">
      {map(posts, post => (
        <Link to={`/${post.slug}`}>
          <Card className="post-list__item text-center">
            <Card.Img
              variant="top"
              src={post.featuredImage.node.localFile.publicURL}
            />
            <Card.ImgOverlay className="item-meta">
              <div>
                <Card.Title>{post.title}</Card.Title>

                {/* <Card.Subtitle>{post.categories.nodes.name}</Card.Subtitle> */}
              </div>
            </Card.ImgOverlay>
          </Card>
        </Link>
      ))}
    </CardColumns>
  )
}
