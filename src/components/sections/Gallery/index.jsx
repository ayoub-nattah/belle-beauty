import React from "react";
import Section from "@styled/Section";

import * as S from "./gallery.styled";

export default function Gallery() {
	return (
		<Section>
			<a id="gallery" />
			<h2>بيئتنا</h2>

			<p className="description">
				. تم التقاط كل هذه الصور في صالون الحلاقة الخاص بنا. كما ترون ، بيئتنا ممتعة ومناسبة للعناية بك وبتقديرك لذاتك
			</p>

			<S.BoxGallery>
				<S.Photo className="photo--1">
					<img src="/assets/images/gallery/photo1.png" alt="photo 1" />
				</S.Photo>

				<S.Photo className="photo--2">
					<img src="/assets/images/gallery/photo2.png" alt="Photo 2" />
				</S.Photo>

				<S.Photo className="photo--3">
					<img src="/assets/images/gallery/photo3.png" alt="Photo 3" />
				</S.Photo>

				<S.Photo className="photo--4">
					<img src="/assets/images/gallery/photo4.png" alt="Photo 4" />
				</S.Photo>

				<S.Photo className="photo--5">
					<img src="/assets/images/gallery/photo5.png" alt="Photo 5" />
				</S.Photo>

				<S.Photo className="photo--6">
					<img src="/assets/images/gallery/photo6.png" alt="Photo 6" />
				</S.Photo>

				<S.Photo className="photo--7">
				<video controls className="video--7">
					<source src="/assets/images/gallery/video.mp4" type="video/mp4" />
				</video>
				</S.Photo>


				<S.Photo className="photo--8">
					<img src="/assets/images/gallery/photo8.png" alt="Photo 8" />
				</S.Photo>
			</S.BoxGallery>
		</Section>
	);
}
