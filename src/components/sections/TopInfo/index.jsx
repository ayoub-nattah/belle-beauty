import React from "react";
import * as S from "./topinfo.styled";
import Icon from "@styled/Icon";



export default function TopInfo() {
	return (
		<S.ContainerTop>
			<S.InfoGroup>
				<Icon
					sizes={24}
					src="/assets/icons/Telephone.svg"
					alt="telephone icon"
				/>
				<figcaption>+212 700-464-998</figcaption>
			</S.InfoGroup>

		

			<S.InfoGroup>
				<a href="https://www.instagram.com" rel="noreferrer" target="_blank">
					<Icon
						sizes={24}
						src="/assets/icons/Instagram.svg"
						alt="instagram icon"
					/>
				</a>

				<a href="https://www.whatsapp.com/" rel="noreferrer" target="_blank">
					<Icon
						sizes={24}
						src="/assets/icons/WhatsApp.svg"
						alt="Whatsapp icon"
					/>
				</a>

				<a href="https://web.facebook.com/" rel="noreferrer" target="_blank">
					<Icon
						sizes={24}
						src="/assets/icons/Facebook.svg"
						alt="Facebook icon"
					/>
				</a>

				<a href="https://www.tiktok.com/" rel="noreferrer" target="_blank">
					<Icon sizes={24} src="/assets/icons/TikTok.svg" alt="Tiktok icon" />
				</a>
			</S.InfoGroup>
		</S.ContainerTop>
	);
}
