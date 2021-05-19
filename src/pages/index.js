import React from "react";
import "./index.scss";
import { Container, Image } from "semantic-ui-react";
import { Link } from "gatsby";
import IconDis from "../images/icono.png";
import Bloglayout from "../layouts/BlogLayout";

export default function index(props) {
	return (
		<Bloglayout>
			<Container className="BoxIcon">
				<Image src={IconDis} className="IconDis" />
			</Container>
			<Container className="BoxIcon">
				<h1>PROXIMAMENTE</h1>
			</Container>
		</Bloglayout>
	);
}
