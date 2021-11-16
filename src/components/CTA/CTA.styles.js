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
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9);
  font-family: "Teko";
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 10px;

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
  }
`
