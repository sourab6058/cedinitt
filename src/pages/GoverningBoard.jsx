import React from "react";
import ProfileCard from "../components/ProfileCard";
import chairperson from "../assets/team/chairperson.jpg";
import director from "../assets/team/director.jpg";
import director2 from "../assets/team/director2.jpg";
import director3 from "../assets/team/director3.jpg";
import director4 from "../assets/team/director_4.jpg";
import director5 from "../assets/team/director5.jpg";
import director6 from "../assets/team/director6.jpg";
import director7 from "../assets/team/director7.png";

export default function GoverningBoard() {
  return (
    <div className="flex flex-col gap-10 items-center justify-between w-full h-full">
      <h1 className="text-3xl font-bold">Administration</h1>
      <h2 className="text-xl font-semibold">CEDI Governing Board</h2>
      <ProfileCard
        image={chairperson}
        name={"Dr. G. Aghila"}
        desgn={"Director NITT, Chairperson, CEDI NITT"}
        post={"Professor of Computer Science and Engineering"}
        email={"director@nitt.edu"}
        phone={""}
      />
      <div className="flex items-center justify-around gap-10">
        <ProfileCard
          image={director}
          name={"Dr. M. Umapathy"}
          desgn={
            "Professor(HAG), Instrumentation and Control Engg at NIT Trichy"
          }
          post={"Professor-in-Charge, Director, CEDI NITT"}
          email={"umapathy@nitt.edu"}
          phone={"+91-431-2503353 (office)"}
        />
        <ProfileCard
          image={director2}
          name={"Dr. S.R. Balasundaram"}
          desgn={"Professor, Computer Applications at NIT Trichy"}
          post={""}
          email={"blsundar@nitt.edu"}
          phone={""}
        />
        <ProfileCard
          image={director3}
          name={"Dr.G.Lakshmi Narayanan"}
          desgn={
            "Professor, Electronics & Communication Engineering at NIT Trichy"
          }
          post={""}
          email={"laksh@nitt.edu"}
          phone={""}
        />
      </div>
      <div className="flex items-center justify-around gap-10">
        <ProfileCard
          image={director4}
          name={"Dr. Ganesan Kannabiran"}
          desgn={
            "Director, National Assessment and Accreditation Council (An Autonomous Institution under UGC, Government of India)"
          }
          post={"Professor (HAG), Management Studies at NIT Trichy"}
          email={"kb@nitt.edu"}
          phone={"+(91) 431 2503703"}
        />
        <ProfileCard
          image={director5}
          name={"Dr. Krishnan Balasubramaniam"}
          desgn={"Institute Professor, Mechanical Engineering at IIT Madras"}
          post={
            "Professor-in-Charge, Gopalakrishnan Deshpande Centre for Innovation and Entrepreneurship"
          }
          email={"balas@iitm.ac.in"}
          phone={""}
        />
        <ProfileCard
          image={director6}
          name={"Mr. Mahalingam Krishnamurthy"}
          desgn={"Partner/Director at TSM Group of Companies"}
          post={"President - RECAL(NITT Alumni Association)"}
          email={""}
          phone={""}
        />
      </div>
      <div className="flex items-center justify-center gap-10 w-full">
        <ProfileCard
          image={director6}
          name={"Mr. Mahalingam Krishnamurthy"}
          desgn={"Partner/Director at TSM Group of Companies"}
          post={"President - RECAL(NITT Alumni Association)"}
          email={""}
          phone={""}
        />
      </div>
      <h1 className="text-2xl font-semibold">Ex-Officio Members</h1>
      <div className="w-full rounded-xl p-3 bg-white shadow-md">
        <h2 className="text-xl font-bold">Registrar</h2>
        <span className="text-blue-500">NIT, Trichy</span>
      </div>
      <div className="w-full rounded-xl p-3 bg-white shadow-md">
        <h2 className="text-xl font-bold">Dean, Planning and Development</h2>
        <span className="text-blue-500">NIT, Trichy</span>
      </div>
      <div className="w-full rounded-xl p-3 bg-white shadow-md">
        <h2 className="text-xl font-bold ">Dean, Research and Consultancy</h2>
        <span className="text-blue-500">NIT, Trichy</span>
      </div>
    </div>
  );
}
