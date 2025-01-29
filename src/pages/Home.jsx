import About from "../components/About";
import Impact from "../components/Impact";
import Slider from "../components/Slider";
import Updates from "../components/Updates";
import Programmes from "../components/Programmes";

export default function Home() {
  return (
    <div className="home flex flex-col gap-2">
      <div className="flex">
        <Slider />
        <Updates />
      </div>
      <About />
      <Impact />
      <Programmes />
    </div>
  );
}
