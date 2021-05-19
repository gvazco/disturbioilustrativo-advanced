import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../images/logo-disturbio.png";

export default function MainNav() {
	return (
		<Navbar
			collapseOnSelect
			expand="xl"
			stiky="top"
			bg="transparent"
			variant="dark"
		>
			<Navbar.Brand href="#home">
				<img src={Logo} width="200" height="70" />
			</Navbar.Brand>
		</Navbar>
	);
}
