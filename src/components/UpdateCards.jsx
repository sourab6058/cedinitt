import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import UpdateCard from "./UpdateCard";

import birac from "../assets/birac.png";
import nidhi from "../assets/nidhi.png";
import plugin from "../assets/plugin.png";
import sibdi from "../assets/sibdi.jpeg";

const images = [birac, nidhi, plugin, sibdi];

export default function UpdateCards({ links }) {
  console.log(links);
  const cards = [];
  for (let i = 0; i < links.length; i += 3) {
    const pane = [];
    for (let j = i; j < Math.min(i + 3, links.length); j++) {
      pane.push(
        <UpdateCard link={links[j].link} text={links[j].update} key={j} />
      );
    }
    cards.push(
      <div className="flex w-[98vw] items-center justify-between p-2 mx-2">
        {pane}
      </div>
    );
  }
  console.log(cards);
  return (
    <div className="w-[98vw] p-2">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {cards}
      </Carousel>
    </div>
  );
}
