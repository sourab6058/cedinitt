import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import slideshow1 from "../../assets/slideshow1.jpg";
import slideshow2 from "../../assets/slideshow2.jpg";
import slideshow3 from "../../assets/slideshow3.jpg";
import slideshow4 from "../../assets/slideshow4.jpg";
import slideshow5 from "../../assets/slideshow5.jpg";
import slideshow6 from "../../assets/slideshow6.jpg";
import slideshow7 from "../../assets/slideshow7.jpg";
import slideshow8 from "../../assets/slideshow8.jpg";
import slideshow9 from "../../assets/slideshow9.jpg";
import slideshow10 from "../../assets/slideshow10.jpg";
import slideshow11 from "../../assets/slideshow11.jpg";
import slideshow12 from "../../assets/slideshow12.png";
import slideshow13 from "../../assets/slideshow13.jpg";
import slideshow14 from "../../assets/slideshow14.png";
const slideshow = [
  slideshow1,
  slideshow2,
  slideshow3,
  slideshow4,
  slideshow5,
  slideshow6,
  slideshow7,
  slideshow8,
  slideshow9,
  slideshow10,
  slideshow11,
  slideshow12,
  slideshow13,
  slideshow14,
];

export default function Slider() {
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {slideshow.map((slide, index) => {
          return (
            <div className={styles.slide} key={index}>
              <div
                style={{
                  backgroundImage: `url(${slide})`,
                }}
              ></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
