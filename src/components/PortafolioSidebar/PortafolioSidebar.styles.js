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

  .count {
    margin: 0 10px 0 0;
    padding: 0;
    font-size: 0.8rem;
    background: #aaa;
    color: black;
    border-radius: 20px;
    width: 30px;
    height: 21px;
    display: block;
    text-align: center;
    float: left;
    font-weight: 600;
  }

  .sidebar-menu-header {
    font-family: "Chub Gotic", sans-serif;
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;
    text-transform: uppercase;
    color: #fff;
  }

  li {
    margin: 0 0 5px 0px;
    color: #000;
    font-family: "Chub Gotic", sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;

    a {
      color: #fff !important;
    }

    a:hover {
      color: #60c1aa !important;
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
      color: #fff;
    }
  }

  img {
    float: left;
    padding: 0 10px 0 0;
    width: 38px;
    height: auto;
    filter: invert(100%);
  }
`
