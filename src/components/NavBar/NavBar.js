import React from "react"
import { Image, Menu, Container, Dropdown } from "semantic-ui-react"
import { Link } from "gatsby"
import "./NavBar.scss"
import Logo from "../../images/logo.png"

export default function NavBarMenu() {
  return (
    <Menu fixed="top" inverted className="navbar">
      <Container>
        <Link to="/">
          <Image
            size="small"
            src={Logo}
            className="navicon"
            style={{ marginRight: "1.5em" }}
          />
        </Link>

        <Menu.Item position="right" as="a">
          <Link to="/#artes-list">Inicio</Link>
        </Menu.Item>

        <Dropdown position="right" item simple text="Menú">
          <Dropdown.Menu>
            <Link to="/portafolio">
              <Dropdown.Item>Portafolio</Dropdown.Item>
            </Link>
            <Link to="/blog">
              <Dropdown.Item>Blog</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item as="a">Contacto</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  )
}
