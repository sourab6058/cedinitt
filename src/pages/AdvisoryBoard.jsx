import React from "react";

const members = [
  {
    name: "Shri.B Shanmuga Sundaram",
    desgn: "Director",
    company: "STEPS Knowledge Services Pvt Ltd., Coimbatore, Tamil Nadu",
  },
  {
    name: "Shri. K. Susil Kumar",
    desgn: "Assistant General Manager",
    company:
      "Tamilnadu Industrial Investment Corporation. Ltd., Tiruchirappalli, Tamil Nadu.",
  },
  {
    name: "Shri. Renukaprasad Belgur",
    desgn: "Co-Founder, Business Mentoring & Advisor",
    company: "Mentorwise firm, Bengaluru, Karnataka",
  },
  {
    name: "Dr.R. Aravindan (NITT Alumni)",
    desgn: "Chief Technology Officer",
    company: "FTD Solutions Pvt. Ltd, Ubi Techpark, Singapore",
  },
  {
    name: "Shri. P.V Kannan (NITT Alumni)",
    desgn: "Managing Director",
    company: "Micromax Systems Pvt Ltd., Tiruchirappalli, Tamil Nadu",
  },
  {
    name: "Shri.D.Ravi",
    desgn: "Director-Marketing",
    company: "Techny Chemy Pvt Ltd., Tiruchirappalli, Tamil Nadu",
  },
  {
    name: "Smt. N.Kavitha",
    desgn: "Technical Director",
    company: "STEPS KNOWLEDGE SERVICES PVT LTD, COIMBATORE, Tamil Nadu",
  },
  {
    name: "Shri.Santosh Bharathwaj",
    desgn: "Auditor",
    company:
      "Sethuraman & Srivatsan, Chartered Accountants, Tiruchirappalli, Tamil Nadu",
  },
  {
    name: "Shri.Navin Mathew",
    desgn: "Vice President",
    company: "Sonata Software Pvt Ltd, Bangalore, Karnataka",
  },
  {
    name: "Dr. V Balamurugan",
    desgn: "Scientist G, Additional Director (AP & IFCS)",
    company:
      "Defence Research & Development Organisation (DRDO), Avadi, Chennai, Tamilnadu",
  },
  {
    name: "Dr.R.Jayapal",
    desgn: "Electronics and Industry Automation Specialist",
    company: "AGM BHEL, Tiruchirappalli (Rtd)",
  },
  {
    name: "Shri.R.Annamalai",
    desgn: "Managing Director",
    company: "Shiru Aura Technologies Pvt Ltd, Chennai",
  },
];

export default function AdvisoryBoard() {
  return (
    <div className="flex flex-col gap-10 items-center justify-between w-full h-full">
      <h1 className="text-3xl font-bold">Administration</h1>
      <h2 className="text-xl font-semibold">Expert Committee Members</h2>
      {members.map(({ name, desgn, company }) => (
        <div className="w-full rounded-xl p-3 bg-white shadow-md">
          <h2 className="text-xl font-bold">{name}</h2>
          <h3 className="text-lg mb-2 text-blue-500">{desgn}</h3>
          <span className="text-lg mb-2 font-semibold text-gray-500">
            {company}
          </span>
        </div>
      ))}
    </div>
  );
}
