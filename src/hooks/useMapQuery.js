import { useStaticQuery, graphql } from "gatsby"

export const useMapQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      staticMap {
        childFile {
          publicURL
        }
      }
    }
  `)

  return data
}
