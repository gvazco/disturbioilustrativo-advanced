import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"
import Slider from "react-slick"

import CTA from "../CTA/CTA"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Wrapper>
      <Slider {...settings}>
        {new Array(5).fill("").map((element, i) => (
          <div>
            <CTA
              key={i}
              image={
                cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
                  .gatsbyImageData
              }
              link={cta.ACF_HomePage[`cta${i + 1}Link`]}
              text={cta.ACF_HomePage[`cta${i + 1}Text`]}
            />
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default CTAArea

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      id="next"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      id="prev"
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  )
}
