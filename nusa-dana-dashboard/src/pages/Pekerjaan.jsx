import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FolderOpen } from "lucide-react";
import Card from "../components/Card";

export default function Pekerjaan() {
  // Data dummy kosong (nanti bisa diganti)
  const data = [];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">Pekerjaan</h2>

      {/* Bagian Atas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Pengembangan */}
        <Card title="Progress Pengembangan">
          <div className="flex justify-between text-center">
            <div>
              <p className="text-2xl font-bold text-sky-700">0</p>
              <p className="text-gray-500 text-sm">Projek</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-sky-700">0</p>
              <p className="text-gray-500 text-sm">Task List</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-sky-700">0</p>
              <p className="text-gray-500 text-sm">Dana Digunakan</p>
            </div>
          </div>
        </Card>

        {/* Data Proyeksi */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold">Data Proyeksi</h3>
            {/* Legend warna di kanan judul */}
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-green-500 rounded-sm"></span> Projek
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-blue-500 rounded-sm"></span> Dana Keluar
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-400 rounded-sm"></span> Dana Masuk
              </div>
            </div>
          </div>

          {/* Placeholder kosong (nanti bisa diisi line chart) */}
          <div className="h-60 flex items-center justify-center border border-dashed border-gray-300 rounded-lg text-gray-400">
            Belum ada data proyeksi
          </div>
        </Card>
      </div>

      {/* Laporan Pertanggungjawaban */}
      <Card title="Laporan Pertanggungjawaban">
        <p className="text-gray-700 mb-2">
          Belum ada laporan pertanggungjawaban yang diajukan.
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Silakan buat laporan baru untuk mencatat hasil kegiatan.
        </p>
        <button className="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700">
          Buat Laporan Sekarang
        </button>
      </Card>

      {/* List Semua Projek */}
      <Card>
        <div className="flex items-center justify-between border-b pb-3 mb-3">
          <h3 className="font-semibold text-base">List Semua Projek</h3>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-sky-100 p-3 rounded-lg">
              <FolderOpen className="text-sky-600" size={24} />
            </div>
            <div>
              <p className="font-medium text-gray-800">Buat Projek Sekarang</p>
              <p className="text-sm text-gray-500">
                Mulai ajukan proposal untuk pengembangan
              </p>
            </div>
          </div>
          <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700">
            Buat Sekarang
          </button>
        </div>
      </Card>
    </div>
  );
}





