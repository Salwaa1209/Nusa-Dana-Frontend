import React from "react";

export default function ProjectModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-[700px] p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>

        <h2 className="text-lg font-semibold mb-4">Buat Projek</h2>

        {/* Progress bar */}
        <div className="h-2 bg-gray-100 rounded mb-4">
          <div className="h-2 bg-sky-200 w-1/4 rounded"></div>
        </div>

        <p className="text-sm text-sky-600 font-medium mb-2">Langkah 1</p>

        {/* Form grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Nama Proyek/Kegiatan</label>
            <input
              type="text"
              placeholder='Ex: "Pembangunan Jalan Usaha Tani Dusun Wogo"'
              className="w-full mt-1 p-2 border rounded"
            />

            <label className="text-sm font-medium mt-3 block">
              Jenis Infrastruktur
            </label>
            <select className="w-full mt-1 p-2 border rounded">
              <option>Pilih Jenis</option>
              <option>Jalan</option>
              <option>Jembatan</option>
              <option>Irigasi</option>
            </select>

            <label className="text-sm font-medium mt-3 block">Lokasi</label>
            <input
              type="text"
              placeholder="Nama desa, dusun, RT/RW"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tahun Pelaksanaan Proyek</label>
            <input
              type="text"
              placeholder='Ex: "2025"'
              className="w-full mt-1 p-2 border rounded"
            />

            <label className="text-sm font-medium mt-3 block">Volume / Luasan</label>
            <input
              type="text"
              placeholder="Ex: 500 m jalan, 3 unit MCK, 1 sumur bor"
              className="w-full mt-1 p-2 border rounded"
            />

            <label className="text-sm font-medium mt-3 block">
              Perkiraan Waktu Pelaksanaan
            </label>
            <input
              type="text"
              placeholder="Ex: 60 hari kerja, April–Juni 2025"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded mr-2"
          >
            Batal
          </button>
          <button className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
}
