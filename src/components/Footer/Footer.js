import React from "react"
import { useMapQuery } from "../../hooks/useMapQuery"
import Facebook from "../../images/facebook-square-brands.svg"
import Instagram from "../../images/instagram-square-brands.svg"
import Youtube from "../../images/youtube-square-brands.svg"

//styles
import { Wrapper, AboutImage } from "./Footer.styles"

const Footer = () => {
  return (
    <>
      <Wrapper>
        <img src={Facebook} />
        <img src={Instagram} />
        <img src={Youtube} />
        <img src={Youtube} />
      </Wrapper>
    </>
  )
}

export default Footer
