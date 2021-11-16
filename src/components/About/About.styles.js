import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #090707;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 1080px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
    padding: 50px;
  }

  .about-text {
    padding: 40px 20px 20px 40px;
    font-family: "Chub Gotic", sans-serif;

    h1 {
      font-weight: 400;
    }

    p {
      font-size: 0.82rem;
      text-align: justify;
      direction: ltr;
      letter-spacing: 1px;
    }
  }
`

export const AboutImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
`
