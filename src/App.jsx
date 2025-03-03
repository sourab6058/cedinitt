import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AdministrationPage from "./pages/AdministrationPage";
import GoverningBoard from "./pages/GoverningBoard";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import AdminTeam from "./pages/AdminTeam";

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
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
