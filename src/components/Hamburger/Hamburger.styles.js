import styled from "styled-components"

export const HamburgerButton = styled.div`
  background: #000;
  img {
    position: fixed;
    display: block;
    z-index: 100000;
    right: 30px;
    top: 35px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    filter: invert(100%);
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 1200px) {
      display: none;
    }
  }
`
