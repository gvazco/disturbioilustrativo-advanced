import React from "react";
import { Container, Segment } from "semantic-ui-react";
import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer";
import "./BlogLayout.scss";

export default function BlogLayout(props) {
	const { children, className } = props;
	return (
		<>
			<Container fluid className="hero">
				<MainNav />
				<Container fluid>{children}</Container>
			</Container>
			<Footer />
		</>
	);
}
