import styled from "styled-components"

export const Wrapper = styled.nav`
  font-family: "Chub Gotic", sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 9px;
  display: none;

  .nav-active {
    color: #60c1aa;
  }

  @media (min-width: 1200px) {
    font-size: 0.8rem;
    display: block;
  }

  ul li {
    display: block;
    margin: 0 10px 0 0;
    float: left;
    height: 30px;
    position: relative;

    a {
      display: flex;
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;
      color: #fff;

      div {
        margin: -4px 0 0 5px;
      }
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:hover {
    color: #60c1aa;
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    left: 0;
    margin: 0;
    top: 30px;
    text-transform: none;
    border-bottom: 1px solid #e7e7e7;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 10px 10px 10px;
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    width: auto;
    min-width: 170px;
  }

  ul ul li a {
    padding: 5px 10px;
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
