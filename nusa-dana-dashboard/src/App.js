import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import { ProjectProvider } from "./components/ProjectContext";

export default function App() {
  return (
    <ProjectProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-50">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="p-6 flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/project" element={<Project />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ProjectProvider>
  );
}
