import React, { useEffect, useState } from "react";
import Header from "@section/Header";

import * as S from "./banner.styled";

export default function Banner() {
  const [image, setImage] = useState(`banner1`);
  const imagesList = ["banner1", "banner2", "banner3", "banner4", "banner5"];

  // Function to handle image change
  const changeImage = () => {
    const currentIndex = imagesList.indexOf(image);
    const nextIndex = (currentIndex + 1) % imagesList.length;
    setImage(imagesList[nextIndex]);
  };

  // useEffect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(changeImage, '5000');
    return () => clearInterval(interval);
  }, [image]);

  return (
    <S.BannerContainer bgImage={image}>
      <Header />

      <section className="content-text">
        <h1 className="text-primary">ÉCOLE LA BAIE BEAUTÉ</h1>
        <p className="text-sub">
          كن جزءًا من رحلة التميز في عالم الحلاقة ، وانضم لتحقيق تحسينات مذهلة وتطور
          استثنائي في مهاراتك الفنية والحلاقة.
        </p>
      </section>

      <S.Points>
        {imagesList.map((bg, index) => (
          <S.Point
            onClick={() => setImage(bg)}
            key={index}
            active={bg === image}
          />
        ))}
      </S.Points>
    </S.BannerContainer>
  );
}
