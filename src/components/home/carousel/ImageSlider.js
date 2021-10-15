import React, { useEffect, useState, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import { PrevButton, NextButton } from "./SliderButtons";
import styles from "./ImageSlider.module.css";
import slide1 from "../../../img/slide1.jpg";
import Image from "next/image";
import slide2 from "../../../img/slide2.jpg";
import slide3 from "../../../img/slide3.jpg";
export const ImageSlider = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <div className={styles.embla__slide__inner}><Image src={slide1} alt="slide1"  width={1230} height={600}/></div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.embla__slide__inner}><Image src={slide2} alt="slide2"  width={1230} height={600}/></div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.embla__slide__inner}><Image src={slide3} alt="slide3"  width={1230} height={600}/></div>
          </div>
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default ImageSlider;