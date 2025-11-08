import React from "react";
import { Home, Folder, TrendingUp, Monitor, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItem =
    "flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-sky-100 transition";

  const activeClass = "bg-sky-600 text-white hover:bg-sky-700";

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
      <div>
        <div className="text-xl font-semibold p-4 border-b">NusaDana</div>
        <nav className="mt-4 space-y-1">
          <NavLink to="/" end className={({ isActive }) => `${navItem} ${isActive ? activeClass : ""}`}>
            <Home size={18} /> Halaman Utama
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => `${navItem} ${isActive ? activeClass : ""}`}>
            <Folder size={18} /> Project
          </NavLink>
          <button className={`${navItem}`}>
            <TrendingUp size={18} /> Dana Desa
          </button>
          <button className={`${navItem}`}>
            <Monitor size={18} /> Pekerjaan
          </button>
        </nav>
      </div>

      <div className="p-4 border-t space-y-2">
        <button className={`${navItem}`}>
          <Settings size={18} /> Pengaturan
        </button>
        <button className={`${navItem}`}>
          <LogOut size={18} /> Keluar
        </button>
      </div>
    </aside>
  );
}
