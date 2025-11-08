// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import DanaDesa from "./pages/DanaDesa";
import Pekerjaan from "./pages/Pekerjaan";
import Pengaturan from "./pages/Pengaturan";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/dana-desa" element={<DanaDesa />} />
              <Route path="/pekerjaan" element={<Pekerjaan />} />
              <Route path="/pengaturan" element={<Pengaturan />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
