import { useStaticQuery, graphql } from "gatsby"

export const useCTAAreaQuery = () => {
  const data = useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720, placeholder: TRACED_SVG)
        }
      }
    }

    query CTAQuery {
      cta: wpPage(databaseId: { eq: 177 }) {
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta4Text
          cta4Link
          cta5Text
          cta5Link
          cta6Text
          cta6Link
          cta1Image {
            ...ctaImage
          }
          cta2Image {
            ...ctaImage
          }
          cta3Image {
            ...ctaImage
          }
          cta4Image {
            ...ctaImage
          }
          cta5Image {
            ...ctaImage
          }
          cta6Image {
            ...ctaImage
          }
        }
      }
    }
  `)

  return data
}
