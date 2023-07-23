import React from "react";
import styled from "styled-components";

export default function Logo() {
	return (
		<StyledLogo>
			<img src="/assets/logo/logo.png" alt="logo Thin Cut" />

			<figcaption>
				<span>La Baie</span>
				<span id="text-primary">Beauté</span>
			</figcaption>
		</StyledLogo>
	);
}

const StyledLogo = styled.figure`
	display: flex;

	img {
		width: 80px;

		
		
	}

	figcaption {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;


		span {
			text-transform: uppercase;
			letter-spacing: 4px;
			color: ${({ theme }) => theme.colors.main};
			line-height: 2;
			font-size: 1rem;
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-weight: ${({ theme }) => theme.fonts.fw.bd};
			padding-top: 10px;


		}
	}
`;
