import React from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import NavMenu from "./NavMenu";
import MegaDropDownMenu from "./MegaDropDownMenu";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center items-start w-full">
      <div className="w-full p-2">
        <img src={logo} alt="NITT Logo and CEDI Logo" className="h-[50px]" />
      </div>
      <div className="flex flex-row font-semibold mt-5 items-center justify-around uppercase text-white bg-blue-400 p-2 w-full">
        <a href="#">Home</a>
        <NavMenu
          name={"Administration"}
          links={[
            {
              text: "CEDI Governing Board",
              link: "AdministrationPage/GoverningBoard",
            },
            {
              text: "Expert Committee",
              link: "AdministrationPage/AdvisoryBoard",
            },
            { text: "Team", link: "AdministrationPage/AdminTeam" },
          ]}
          className="text-xl"
        />
        <NavMenu
          name={"Policies & Guidlines"}
          links={[
            {
              text: "CEDI Incubation Policy and Procedure 2020",
              link: "https://cedinitt.com/CEDI%20Incubation%20Policy%20and%20Procedure%202020.pdf",
            },
            {
              text: "CEDI NITT Startup Policy for Faculty, Staff & Students",
              link: "https://cedinitt.com/CEDI%20NITT%20Startup%20Policy%20for%20Faculty%20%20Staff%20%20Students%20%20%20JUL%202021.pdf",
            },
            {
              text: "NISP 2019 Policy",
              link: "https://cedinitt.com/NISP%202019%20Policy.pdf",
            },
            {
              text: "Tamil Nadu Startup Policy",
              link: "https://cedinitt.com/STARTUP-TN-Policy.pdf",
            },
          ]}
        />
        <NavMenu
          name={"Facilities"}
          links={[
            {
              text: "Incubation Services",
              link: "https://cedinitt.com/IncubationServices",
            },
            {
              text: "Facilities Labs and Infrastructure",
              link: "https://cedinitt.com/Labs",
            },
            {
              text: "Contribution to Ecosystem",
              link: "https://cedinitt.com/ContributionEcosystem",
            },
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
        <MegaDropDownMenu
          name={"Sponsors/Partners"}
          links={[
            { text: "ACET", link: "https://cedinitt.com" },
            { text: "CCW", link: "https://cedinitt.com" },
            { text: "CIT", link: "https://cedinitt.com" },
            { text: "KCET", link: "https://cedinitt.com" },
            { text: "KRIC-NEC", link: "https://cedinitt.com" },
            { text: "ICE", link: "https://cedinitt.com" },
            { text: "BSCW", link: "https://cedinitt.com" },
            { text: "NMC", link: "https://cedinitt.com" },
            { text: "MeiTy TIDE", link: "https://cedinitt.com" },
            { text: "TIIC", link: "https://cedinitt.com" },
            { text: "EDII Tamil Nadu", link: "https://cedinitt.com" },
            { text: "EDII Ahmedabad", link: "https://cedinitt.com" },
            { text: "SONATA", link: "https://cedinitt.com" },
            { text: "ASIA Foundation", link: "https://cedinitt.com" },
            { text: "TWI", link: "https://cedinitt.com" },
            {
              text: "SIEMENS INNOVATION GRANT PVT LTD",
              link: "https://cedinitt.com",
            },
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
