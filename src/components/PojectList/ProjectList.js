import React from "react"
import { Grid, Card, Icon, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import moment from "moment"
import "moment/locale/es"
import { map } from "lodash"
import "./ProjectList.scss"

export default function ProjectList(props) {
  const { proyectos } = props
  console.log(proyectos)

  return (
    <Grid className="proyectos-list">
      {map(proyectos, proyecto => (
        <Grid.Column key={proyecto.id} mobile={16} tablet={16} computer={5}>
          <Link to={`/portafolio/${proyecto.slug}`}>
            <Card className="proyectos-list__item">
              <Image src={proyecto.featuredImage.node.localFile.publicURL} />
              <Card.Content>
                <Card.Header>{proyecto.Seo.seotitle}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Card.Meta>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: proyecto.excerpt,
                    }}
                  />
                </Card.Meta>
                <Card.Meta>
                  <Icon name="calendar alternate outline" />
                  {moment(proyecto.date).format("LL")}
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      ))}
    </Grid>
  )
}
