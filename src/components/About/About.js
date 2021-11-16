import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { Wrapper, AboutImage } from "./About.styles"

const About = () => {
  const data = useAboutQuery()
  const imageData = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <Wrapper>
      <div className="about-text">
        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
      </div>
      <AboutImage image={imageData} alte="About Image" />
    </Wrapper>
  )
}

export default About
