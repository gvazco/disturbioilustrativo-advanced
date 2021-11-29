import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`

export const CTAImage = styled.div`
  max-height: 400px;
  position: relative;
  overflow: hidden;
  margin: 5px;
  padding: 20px;

  :hover img {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    max-height: 100%;
    max-width: 100%;
  }
`

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const CTAImageText = styled.p`
  text-shadow: 2px 2px 0px #1d1d1d, 3px 3px 0px #1d1d1d, 4px 4px 2px #60c1aa;
  font-family: "Chub Gotic", sans-serif;
  font-weight: 500;
  letter-spacing: 2.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 10px;
  max-width: 80%;
  text-align: center;
  position: absolute;
  left: 12px;
  opacity: 0.01;

  :hover {
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
    position: absolute;
    left: 20px;
  }
`
