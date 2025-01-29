import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Card from "../components/Card";

import birac from "../assets/birac.png";
import nidhi from "../assets/nidhi.png";
import plugin from "../assets/plugin.png";
import sibdi from "../assets/sibdi.jpeg";

const images = [birac, nidhi, plugin, sibdi];

export default function Programmes() {
  return (
    <div className="w-[98vw] p-2">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        // centerMode={true}
        showThumbs={false}
      >
        <div className="flex w-[98vw] items-center justify-between p-2">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex w-[98vw] items-center justify-between p-2">
          <Card />
          <Card />
          <Card />
        </div>
      </Carousel>
    </div>
  );
}
