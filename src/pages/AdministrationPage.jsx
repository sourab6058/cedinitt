import React from "react";
import GoverningBoard from "./GoverningBoard";
import { Outlet, Route, Routes } from "react-router-dom";
import SideMiniNav from "../components/SideMiniNav";

const rows = [
  { name: "CEDI Governing Board", link: "GoverningBoard" },
  { name: "Expert Committee Members", link: "AdvisoryBoard" },
  { name: "Team", link: "AdminTeam" },
];

export default function AdministrationPage() {
  return (
    <div className="min-w-[100wv] min-h-[100vh] bg-slate-100">
      <div className="w-full flex">
        <div className="h-full flex gap-10 w-full m-5">
          <SideMiniNav rows={rows} />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
