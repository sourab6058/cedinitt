import React from "react";

const team = [
  { name: "Dr. M. Umapathy", desgn: "Overall Administration" },

  {
    name: "Dr. G. Lakshminarayanan",
    desgn: "Finance & Accounts, Incubation and Outreach",
  },

  {
    name: "Dr. S.R. Balasundaram",
    desgn: "IT and Skill Training & Development",
  },

  { name: "Mr. G. Krishnan", desgn: "Chief Executive Officer" },
];

const faculty = [
  { name: "Dr. G. Uma", desgn: "Dept. of ICE" },
  { name: "Dr. J. Jerald", desgn: "Dept. of Production Engineering" },
  { name: "Dr. M. Venkatakirthiga", desgn: "Dept. of EEE" },
  { name: "Dr. U. Srinivasulu Reddy", desgn: "Dept. of CA" },
  { name: "Dr. R. Manjula", desgn: "Dept. of Civil" },
  { name: "Dr. S. S. Karthikeyan", desgn: "Dept. of ECE" },
  { name: "Dr. P. Kaushik", desgn: "Dept. of Mechanical Engineering" },
  { name: "Dr. R. Periyasamy", desgn: "Dept. of ICE" },
  { name: "Dr. D. Ruben Sudhakar", desgn: "Dept. of Energy Environment" },
  { name: "Dr. B. Janarthanan", desgn: "Dept. of Management Studies" },
  { name: "Dr. Hemant Kumar", desgn: "Dept. of ECE" },
  { name: "Dr. Shobitha Poulose", desgn: "Dept. of Management Studies" },
  { name: "Dr. Shiraz Sohail", desgn: "Dept. of ICE" },
];

export default function AdminTeam() {
  return (
    <div className="flex flex-col gap-10 items-center justify-between w-full h-full">
      <h1 className="text-3xl font-bold">Administration</h1>
      <h2 className="text-xl font-semibold">Team</h2>
      {team.map(({ name, desgn }) => (
        <div className="w-full rounded-xl p-3 bg-white shadow-md">
          <h2 className="text-xl font-bold">{name}</h2>
          <h3 className="text-lg mb-2 text-blue-500">{desgn}</h3>
        </div>
      ))}
      <h2 className="text-xl font-semibold mt-2">Faculty Associates of CEDI</h2>
      {faculty.map(({ name, desgn }) => (
        <div className="w-full rounded-xl p-3 bg-white shadow-md">
          <h2 className="text-xl font-bold">{name}</h2>
          <h3 className="text-lg mb-2 text-blue-500">{desgn}</h3>
        </div>
      ))}
    </div>
  );
}
