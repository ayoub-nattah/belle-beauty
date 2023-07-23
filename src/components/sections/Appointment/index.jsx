import React from "react";
import Section from "@styled/Section";
import * as S from "./appointment.styled";

export default function Appointment() {
	return (
		<Section>
			<S.BoxBook>
				<S.InfoBook>
					<span>احجز الان</span>
					<h2>
						مقاعد قليلة متبقية احجز الان واحصل علي خصم %20					
					</h2>
					<p>هذا العرض ساري حتى 18 يونيو - 18 يونيو 2023</p>
				</S.InfoBook>
			</S.BoxBook>
		</Section>
	);
}
