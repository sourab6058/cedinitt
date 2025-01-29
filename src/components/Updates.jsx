// import "../styles/updates.css";
const updates = [
  {
    update:
      "CEDI Call for Early Stage Startup Applications 2025 under MietY's GENESIS Scheme (new)",
    link: "https://cedinitt.com/CEDI%20NITT%20Call%20for%20Early%20Stage%20Startup%20Applns%202025%20under%20EiR%20Component%20of%20GENESIS%20Scheme.pdf",
  },
  {
    update:
      "CEDI Receives Generous ₹15 Lakhs CSR Contribution from Esteemed and Distinguished Alumnus and CIREL SYSTEMS Pvt Ltd",
    link: "https://cedinitt.com/CSR%20Fund%20CIREL%20SYSTEMS%20PVT%20LTD.pdf",
  },
  {
    update: "CALL for applications for the CEDI incubation program 2024-2025",
    link: "https://cedinitt.com/Call%20for%20Applications%20for%20the%20CEDI%20Incubation%20program%202024-2025.pdf",
  },
  {
    update: "CEDI-Naviya Pre-incubation program 2024",
    link: "https://cedinitt.com/CEDI_NAVIYA_Pre_Incubation_Program_2024.pdf",
  },
  {
    update: "CEDI Call for NITT Faculty Proposal 2024",
    link: "https://cedinitt.com/CEDI_Call_for_NITT_Faculty_2024.pdf",
  },
  {
    update: "Second Edition of CII Madurai Conclave on July 19 th 2024",
    link: "https://cedinitt.com/SecondEditionMaduraiConclave.png",
  },
  {
    update: "Call For Summer Student Internship at CEDI",
    link: "https://www.nitt.edu/home/rc/cedi/CEDI-Summer-Internship-2023.pdf",
  },
];
export default function Updates() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl uppercase p-2 font-bold border-b-2 border-blue-400">
        Updates
      </h2>
      <div className="flex flex-col gap-2 max-h-[450px] overflow-y-scroll">
        {updates.map(({ update, link }) => (
          <div className="p-2 border-b border-slate-500">
            {update}
            {"  "}
            <span
              className="text-blue-400 font-bold animate-pulse cursor-pointer"
              onClick={() => handleClick(link)}
            >
              Click Here
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
