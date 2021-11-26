import styled from "styled-components"

export const Wrapper = styled.aside`
  margin: 40px 0 0 0;
  min-width: 25%;

  @media (min-width: 992px) {
    margin: 125px 15px 0 0;
  }
`

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0 20px 0 0;
  margin: 0;

  .sidebar-section {
    font-family: "Chub Gotic", sans-serif;
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0 0 30px 0;
    padding: 0 0 5px 0;
    color: #fff;
  }

  li {
    margin: 0 0 5px 0px;
    color: #000;
    font-family: "Chub Gotic", sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #fff;

    a {
      color: #fff;
    }
    a:hover {
      color: #60c1aa;
    }
  }

  .sidebar-highlighted {
    color: #d22e26;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
    }
  }

  span {
    margin: 0 0 0 40px;
  }
`
