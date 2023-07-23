import React from "react";
import { useTheme } from "styled-components";

import Section from "@styled/Section";
import Icon from "@styled/Icon";
import Logo from "@components/Logo";
import Button from "@components/Button";

import * as S from "./footer.styled";

export default function Footer() {
	const theme = useTheme();

	return (
		<S.FooterSection background={theme.colors.dark} color={theme.colors.main}>
			<a name="contact" />
			<S.Footer>
				<S.Menu>
					<Logo />

					<S.Links>
						<a href="#about">About</a>
						<a href="#services">Skills</a>
						<a href="#team">Team</a>
						<a href="#gallery">Gallery</a>
						<a href="#location">Location</a>
						<a href="#contact">Contact</a>
					</S.Links>
				</S.Menu>

				<S.Divider order={1} />

				<S.FeedbackForm id="feedback">
					<h2>أرسل رأيك</h2>

					<S.Field>
						<label htmlFor="name" id="name">
							Name
						</label>
						<input type="text" placeholder="Name" required />
					</S.Field>

					<S.Field>
						<label htmlFor="email" id="email">
							E-mail
						</label>
						<input type="email" placeholder="Your best email" required />
					</S.Field>

					<S.Field>
						<label htmlFor="message" id="message">
							Message
						</label>
						<textarea
							rows="4"
							cols="22"
							name="message"
							form="feedback"
							placeholder="Feedback"
							required
						/>
					</S.Field>

					<Button title="Send" />
				</S.FeedbackForm>

				<S.Divider order={-1} />

				<S.Contact>
					<h3>Contact</h3>

					<S.ContactInfo>
						<h4>رقم الهاتف</h4>
						<span>+212 700-464-998</span>
					</S.ContactInfo>

					<S.ContactInfo>
						<h4>العنوان</h4>
						<span>Palace Embankment, 32, St Petersburg, Rússia, 190000</span>
					</S.ContactInfo>

					<S.ContactInfo>
						<h4>La baie beaté مجتمع</h4>

						<S.SocialMedia>
							<a
								href="https://www.instagram.com"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={28}
									src="/assets/icons/Instagram.svg"
									alt="instagram icon"
								/>
							</a>

							<a
								href="https://www.whatsapp.com/"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={28}
									src="/assets/icons/WhatsApp.svg"
									alt="Whatsapp icon"
								/>
							</a>

							<a
								href="https://web.facebook.com/"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={28}
									src="/assets/icons/Facebook.svg"
									alt="Facebook icon"
								/>
							</a>

							<a
								href="https://www.tiktok.com/"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={28}
									src="/assets/icons/TikTok.svg"
									alt="Tiktok icon"
								/>
							</a>
						</S.SocialMedia>
					</S.ContactInfo>
				</S.Contact>

				<S.Divider order={-1} />
			</S.Footer>

			<S.Rights>
				<p className="rights">
					<span id="text-primary">LA BAIE BEAUTÉ</span> © {new Date().getFullYear()}{" "}
					All rights reserved.
				</p>

				<p className="developer">
					Developed by{" "}
					<a
						href="https://github.com/Hamzadakhla"
						rel="noreferrer"
						target="_blank"
					>
						Ayoub
						<Icon sizes={24} src="/assets/icons/Github.svg" alt="github icon" />
					</a>
				</p>
			</S.Rights>
		</S.FooterSection>
	);
}
