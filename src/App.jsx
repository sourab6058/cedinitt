import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AdministrationPage from "./pages/AdministrationPage";
import GoverningBoard from "./pages/GoverningBoard";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import AdminTeam from "./pages/AdminTeam";
import IncubationServices from "./pages/IncubationServices";
import IncubationServicesPages from "./components/IncubationServicesPages";
import Labs from "./pages/Labs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/AdministrationPage" element={<AdministrationPage />}>
          <Route path="GoverningBoard" element={<GoverningBoard />} />
          <Route path="AdvisoryBoard" element={<AdvisoryBoard />} />
          <Route path="AdminTeam" element={<AdminTeam />} />
        </Route>
        <Route path="/IncubationServices" element={<IncubationServices />}>
          <Route
            path="Mentoring"
            element={<IncubationServicesPages contentOf={"Mentoring"} />}
          />
          <Route
            path="StudentInterns"
            element={<IncubationServicesPages contentOf={"StudentInterns"} />}
          />
          <Route
            path="Flexibility"
            element={<IncubationServicesPages contentOf={"Flexibility"} />}
          />
          <Route
            path="IntegrationCommunity"
            element={
              <IncubationServicesPages contentOf={"IntegrationCommunity"} />
            }
          />
          <Route
            path="CorporateExpertise"
            element={
              <IncubationServicesPages contentOf={"CorporateExpertise"} />
            }
          />
        </Route>
        <Route path="Labs" element={<Labs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
