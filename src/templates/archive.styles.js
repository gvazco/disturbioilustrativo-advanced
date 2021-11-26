import styled from "styled-components"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`

export const Image = styled.div`
  margin-bottom: 20px;
  max-height: 100px;
  position: relative;
  overflow: hidden;

  img {
    filter: brightness(90%);
    transition: 0.3s ease-in;
  }

  :hover img {
    filter: brightness(100%);
    transform: scale(1.1);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    max-height: 300px;
    width: 100%;
  }
`
export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

export const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const PageContent = styled.article`
  margin: 20px 0 20px 0;

  .entry-content {
      margin-bottom:30px;
      border-radius: 9px;
      background: #090707;
      box-shadow: inset 6px 6px 12px #040303,
            inset -6px -6px 12px #0e0b0b;
    }

    .content {
      padding: 20px;
    }
  }

  .entry-content:hover {
    border-radius: 9px;
    background: linear-gradient(145deg, #080606, #0a0707);
    box-shadow:  6px 6px 12px #040303,
             -6px -6px 12px #0e0b0b;
  }
`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  color: #fff;
  :hover {
    color: #60c1aa;
  }
`

export const StyledDate = styled.div`
  font-family: "Chub Gotic", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
`

export const StyledReadMore = styled(Link)`
  font-family: "Chub Gotic", sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #000;
  position: relative;
  width: 120px;
  height: 35px;
  display: block;
  background: #fff;
  padding: 3px 0 0 10px;
  margin-bottom: 30px;

  :hover {
    background: #60c1aa;
  }
`
