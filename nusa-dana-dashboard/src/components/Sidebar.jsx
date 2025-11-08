import React from "react";
import { Home, Folder, BarChart, Briefcase, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Halaman Utama", icon: <Home size={18} /> },
    { name: "Project", icon: <Folder size={18} /> },
    { name: "Dana Desa", icon: <BarChart size={18} /> },
    { name: "Pekerjaan", icon: <Briefcase size={18} /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-center py-6 text-sky-700">
          NusaDana
        </h1>
        <nav className="flex flex-col gap-1 px-3">
          {menu.map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-sky-50 rounded-lg"
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-3 border-t">
        <button className="flex items-center gap-3 px-4 py-2 w-full text-gray-600 hover:bg-sky-50 rounded-lg">
          <Settings size={18} /> Pengaturan
        </button>
        <button className="flex items-center gap-3 px-4 py-2 w-full text-gray-600 hover:bg-sky-50 rounded-lg mt-1">
          <LogOut size={18} /> Keluar
        </button>
      </div>
    </aside>
  );
}
