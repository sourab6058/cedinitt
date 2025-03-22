import { Outlet } from "react-router-dom";
import SideMiniNav from "../components/SideMiniNav";

const rows = [
  { name: "Mentoring", link: "Mentoring" },
  { name: "Student Interns", link: "StudentInterns" },
  { name: "Flexibility", link: "Flexibility" },
  { name: "Integration Community", link: "IntegrationCommunity" },
  { name: "Corporate Expertise", link: "CorporateExpertise" },
];

export default function IncubationServices() {
  return (
    <div>
      <div className="min-w-[100wv] min-h-[100vh] bg-slate-100">
        <div className="w-full flex">
          <div className="h-full flex gap-10 w-full m-5">
            <SideMiniNav rows={rows} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
