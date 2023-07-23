import React from "react";
import Section from "@styled/Section";
import * as S from "./location.styled";

export default function Location() {
	return (
		<Section>
			<h2>أين تجدنا؟</h2>

			<S.Map
			    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7994.014352473207!2d-15.942197194259644!3d23.689361573379195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc22496795de5a6b%3A0xe3d633c7746d119b!2sLa%20Baie%20Beaut%C3%A9!5e0!3m2!1sen!2sus!4v1681600905448"
				height="600"
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</Section>
	);
}
