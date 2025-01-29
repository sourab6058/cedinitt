import CountUp from "react-countup";

import { TbBuildingFactory2, TbPigMoney } from "react-icons/tb";
import { FaPeopleGroup, FaPersonDotsFromLine } from "react-icons/fa6";

export default function Impact() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100">
      <h1 className="text-5xl font-semibold text-slate-900 text-center mt-5  w-100">
        IMPACT
      </h1>
      <div className="w-[250px] h-[5px] bg-blue-500 my-5"></div>
      <div className="flex flex-row p-3 items-center justify-around w-[90vw]">
        <div className="flex items-center justify-center flex-col">
          <TbBuildingFactory2 className="text-9xl text-blue-500  w-[150px] p-2 h-[auto] shadow-lg rounded-full bg-slate-200" />{" "}
          <div className="text-blue-500 text-3xl mt-3">STARTUPS</div>
          <div className="text-blue-500 text-5xl font-bold">
            <CountUp end={28} duration={3} />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <FaPeopleGroup className="text-9xl text-blue-500  w-[150px] p-2 h-[auto] shadow-lg rounded-full bg-slate-200" />{" "}
          <div className="text-blue-500 text-3xl mt-2">ENTREPRENEURS</div>
          <div className="text-blue-500 text-5xl font-bold">
            <CountUp end={100} duration={3} />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <FaPersonDotsFromLine className="text-9xl text-blue-500  w-[150px] p-2 h-[auto] shadow-lg rounded-full bg-slate-200" />{" "}
          <div className="text-blue-500 text-3xl mt-2">EMPLOYMENT</div>
          <div className="text-blue-500 text-5xl font-bold">
            <CountUp end={5000} duration={3} />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <TbPigMoney className="text-9xl text-blue-500  w-[150px] p-2 h-[auto] shadow-lg rounded-full bg-slate-200" />{" "}
          <div className="text-blue-500 text-3xl mt-2">FUNDS</div>
          <div className="text-blue-500 text-5xl font-bold">
            ₹ <CountUp end={10000000} duration={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
