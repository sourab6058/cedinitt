import React from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center items-start w-full">
      <div className="w-full p-2">
        <img src={logo} alt="NITT Logo and CEDI Logo" className="h-[50px]" />
      </div>
      <div className="flex font-semibold gap-5 mt-5 items-center justify-center uppercase text-white bg-blue-400 p-2 w-full">
        <a href="#">Home</a>
        <NavMenu
          name={"Administration"}
          links={[
            { text: "CEDI Governing Board", link: "#" },
            { text: "Expert Committee", link: "#" },
            { text: "Team", link: "#" },
          ]}
        />
        <NavMenu
          name={"Policies & Guidlines"}
          links={[
            { text: "CEDI Incubation Policy and Procedure 2020", link: "#" },
            {
              text: "CEDI NITT Startup Policy for Faculty, Staff & Students",
              link: "#",
            },
            { text: "NISP 2019 Policy", link: "#" },
            { text: "Tamil Nadu Startup Policy", link: "#" },
          ]}
        />
        <NavMenu
          name={"Facilities"}
          links={[
            { text: "Incubation Services", link: "#" },
            { text: "Facilities Labs and Infrastructure", link: "#" },
            { text: "Contribution to Ecosystem", link: "#" },
          ]}
        />
        <NavMenu
          name={"Incubatees"}
          links={[
            { text: "Graduated", link: "#" },
            { text: "Ongoing", link: "#" },
            { text: "Students/Faculty Start-ups", link: "#" },
            { text: "Startup Compendium", link: "#" },
          ]}
        />
        <NavMenu
          name={"Events"}
          links={[
            { text: "Past Events", link: "#" },
            { text: "Workshops", link: "#" },
          ]}
        />
        <a href="#">Application</a>
        <a href="#">Report</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
