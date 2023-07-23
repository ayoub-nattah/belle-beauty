import React, { useState } from "react";
import MediaQuery from "react-responsive";

import Logo from "@components/Logo";
import ButtonMenuMobile from "@components/ButtonMenuMobile";
import * as S from "./header.styled";

export default function Header() {
	const [showMenuMobile, setShowMenuMobile] = useState(false);

	const statusMenu = (status) => {
		setShowMenuMobile(status);
	};

	return (
		<S.Header>
			<Logo />

			<MediaQuery minWidth={700}>
				<S.NavBox>
					<a href="#about">About</a>
					<a href="#services">Skills</a>
					<a href="#team">Team</a>
					<a href="#gallery">Gallery</a>
					<a href="#contact">Contact</a>
				</S.NavBox>

			</MediaQuery>

			<MediaQuery maxWidth={699}>
				<ButtonMenuMobile status={statusMenu} />

				{showMenuMobile ? (
					<S.MenuMobile>
						<S.NavBoxMobile>
							<a href="#about">About</a>
							<a href="#services">Skills</a>
							<a href="#team">Team</a>
							<a href="#gallery">Gallery</a>
							<a href="#contact">Contact</a>
						</S.NavBoxMobile>

					</S.MenuMobile>
				) : null}
			</MediaQuery>
		</S.Header>
	);
}
