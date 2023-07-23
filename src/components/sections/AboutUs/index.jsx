import React from "react";

import Section from "@styled/Section";
import Metric from "@styled/Metric";

import * as S from "./about.styled";

export default function AboutUs() {
	return (
		<Section>
			<a id="about" />
			<h2>معلومات عنا</h2>

			<S.Content>
				<S.BoxImages>
					<figure>
						<img
							src="/assets/images/about/image2.png"
							alt="Homem de boné cortando cabelo"
						/>
					</figure>

					<figure>
						<img
							src="/assets/images/about/image1.png"
							alt="Homem cacheado e de chapéu cortando cabelo"
						/>
					</figure>
				</S.BoxImages>

				<S.Box>
					<S.ContentText>
					<h3>
						توفير تدريب متميز منذ عام <span id="text-primary">2012</span>
					</h3>


						<p>
							نحن نسعى جاهدين لتقديم برامج تعليمية متنوعة ومتكاملة تلبي احتياجات كل فرد. سواء كنت مبتدئًا يبحث عن بداية قوية في مجال الحلاقة أو محترفًا يرغب في تحسين مهاراته، فإننا نقدم دورات مصممة خصيصًا لتلبية أهدافك.

							نحن فخورون بتاريخ نجاحنا في تدريب العديد من الحلاقين المحترفين الذين حققوا نجاحًا كبيرًا في هذا المجال. ونحن نهدف إلى مواصلة تميزنا في تأهيل الطلاب ليصبحوا خبراء في صناعة الحلاقة.

							انضم إلى معهد تعليم الحلاقة للرجال والنساء واسعَ دائرة معارفك واكتسب المهارات التي ستمكنك من احتراف فن الحلاقة. ابدأ رحلتك المهنية اليوم واستعد لتحقيق النجاح في عالم الحلاقة.
						</p>

					</S.ContentText>

					<S.BoxMetrics>
						<Metric sizeNumber="3">
							<span className="number">43</span>
							<span className="caption">سنوات من الخبرة</span>
						</Metric>

						<Metric sizeNumber="3">
							<span className="number">+200</span>
							<span className="caption">طلاب يشعرون بالرضى</span>
						</Metric>
					</S.BoxMetrics>
				</S.Box>
			</S.Content>
		</Section>
	);
}
