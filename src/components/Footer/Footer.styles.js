import styled from "styled-components"

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #fff;
  text-align: center;
  height: 200px;
  margin: 0 50px;

  img {
    width: 25px;
    height: 25px;
    filter: invert(100%);
    margin: 0 20px;
  }

  p {
    margin: 0;
    padding: 0;
  }
`
export const AboutImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
`
