import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import slideshow1 from "../../assets/slideshow1.jpg";
import slideshow2 from "../../assets/slideshow2.jpg";
import slideshow3 from "../../assets/slideshow3.jpg";
import slideshow4 from "../../assets/slideshow4.jpg";
const slideshow = [slideshow1, slideshow2, slideshow3, slideshow4];

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
