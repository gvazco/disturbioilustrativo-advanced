import React from "react";
import Logo01 from "../../images/icons/Logo01.svg";
import Logo02 from "../../images/icons/Logo02.svg";
import Logo03 from "../../images/icons/Logo03.svg";
import Logo04 from "../../images/icons/Logo04.svg";
import Logo05 from "../../images/icons/Logo05.svg";
import Logo06 from "../../images/icons/Logo06.svg";
import "./Footer.scss";

export default function Footer() {
	return (
		<div className="footer">
			<div>
				<Logo01 className="logo" />
				<Logo02 className="logo" />
				<Logo03 className="logo" />
				<Logo04 className="logo" />
				<Logo05 className="logo" />
				<Logo06 className="logo" />
			</div>
		</div>
	);
}
