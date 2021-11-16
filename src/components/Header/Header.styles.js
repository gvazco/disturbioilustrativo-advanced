import styled from "styled-components"

export const Wrapper = styled.header`
  background: #090707;
  height: 110px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  z-index: 10000;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;

  img {
    width: 50px;
    margin: 0 0 0 10px;
    padding: 12px 0 0 0;
  }

  @media (min-width: 1200px) {
    justify-content: center;

    img {
      position: relative;
      right: 250px;
    }
  }

  @media (min-width: 1600px) {
    justify-content: center;

    img {
      position: relative;
      right: 420px;
    }
  }
`
