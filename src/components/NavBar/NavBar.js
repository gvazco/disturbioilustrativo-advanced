import React from "react"
import { Image, Menu, Container, Dropdown } from "semantic-ui-react"
import { Link } from "gatsby"
import "./NavBar.scss"
import Logo from "../../images/logo.png"

export default function NavBarMenu() {
  return (
    <Menu fixed="top" inverted className="navbar">
      <Container>
        <Menu.Item as="a" href="/" header>
          <Image
            size="small"
            src={Logo}
            className="navicon"
            style={{ marginRight: "1.5em" }}
          />
        </Menu.Item>

        <Menu.Item position="right" as="a">
          <Link to="/">Inicio</Link>
        </Menu.Item>

        <Dropdown position="right" item simple text="Menú">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/portafolio">Portafolio</Link>
            </Dropdown.Item>

            <Dropdown.Item>
              <Link to="/blog">Blog</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as="a">Contacto</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  )
}
