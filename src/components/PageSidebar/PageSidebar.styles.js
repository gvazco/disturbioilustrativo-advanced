import styled from "styled-components"

export const Wrapper = styled.aside`
  margin-top: 40px;
  min-width: 25%;

  @media (min-width: 992px) {
    margin: 100px 15px 0 0;
    padding-right: 20px;
  }
`

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0 20px 0 0;
  margin: 0;

  .sidebar-menu-header {
    display: flex;
    font-family: "Chub Gotic", sans-serif;
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;
    text-transform: uppercase;
    color: #fff;

    img {
      margin-bottom: 5px;
      padding: 0 10px 0 0;
      width: 38px;
      height: auto;
      filter: invert(100%);
    }
  }

  li {
    margin: 0 0 5px 38px;
    color: #000;
    font-family: "Chub Gotic", sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;

    a {
      color: #fff;
    }

    a:hover {
      color: #60c1aa;
    }
  }

  .sidebar-highlighted {
    color: #60c1aa;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
    }
  }
`
