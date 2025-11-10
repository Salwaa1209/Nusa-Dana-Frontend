import React, { useState } from "react";

export default function ProjectModal({ onClose }) {
  const [step, setStep] = useState(1);

  // handle next step
  const nextStep = () => {
    if (step < 5) setStep(step + 1);
    else onClose(); // close when done
  };

  // handle back step
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // progress bar width
  const progress = `${(step / 5) * 100}%`;

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

        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 rounded mb-4">
          <div
            className="h-2 bg-sky-500 rounded transition-all duration-300"
            style={{ width: progress }}
          ></div>
        </div>

        <p className="text-sm text-sky-600 font-medium mb-4">
          Langkah {step}
        </p>

        {/* STEP 1 */}
        {step === 1 && (
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
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Penanggung Jawab / Kades</label>
              <input
                type="text"
                placeholder="Nama Penanggung Jawab"
                className="w-full mt-1 p-2 border rounded"
              />

              <label className="text-sm font-medium mt-3 block">Pelaksana Kegiatan (TPK)</label>
              <select className="w-full mt-1 p-2 border rounded">
                <option>Pilih Jenis</option>
                <option>Jalan</option>
                <option>Jembatan</option>
                <option>Irigasi</option>
                <option>Drainase</option>
              </select>

              <label className="text-sm font-medium mt-3 block">Masyarakat Terlibat</label>
              <input
                type="text"
                placeholder="Nama desa, dusun, RT/RW"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Permasalahan / Kebutuhan</label>
              <input
                type="text"
                placeholder="Tahun Pelaksanaan"
                className="w-full mt-1 p-2 border rounded"
              />

              <label className="text-sm font-medium mt-3 block">Tujuan Pembangunan</label>
              <select className="w-full mt-1 p-2 border rounded">
                <option>Pilih Jenis</option>
                <option>Perbaikan Infrastruktur</option>
                <option>Peningkatan Kualitas Hidup</option>
              </select>

              <label className="text-sm font-medium mt-3 block">Manfaat bagi Masyarakat</label>
              <input
                type="text"
                placeholder="Durasi Pengerjaan"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Uraian Pekerjaan</label>
              <input
                type="text"
                placeholder='Ex: “Pembersihan lahan, pengurugan, pengecoran, finishing”'
                className="w-full mt-1 p-2 border rounded"
              />

              <label className="text-sm font-medium mt-3 block">Volume & Satuan</label>
              <input
                type="text"
                placeholder="Contoh: 100 m², 50 m³, 20 m"
                className="w-full mt-1 p-2 border rounded"
              />

              <label className="text-sm font-medium mt-3 block">Harga Satuan</label>
              <input
                type="text"
                placeholder="Berdasarkan HSPK daerah"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Jumlah Biaya</label>
              <input
                type="text"
                placeholder="Volume × Harga Satuan"
                className="w-full mt-1 p-2 border rounded"
              />

              <label className="text-sm font-medium mt-3 block">Total Anggaran</label>
              <input
                type="text"
                placeholder="Jumlah seluruh biaya (Rp)"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium">Unggah Foto Bukti Kerusakan</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
                <p className="text-gray-500">Unggah Foto</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Unggah Surat Persetujuan Masyarakat</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
                <p className="text-gray-500">Unggah Surat</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold mb-3">Konfirmasi</h3>
            <p className="text-gray-600">
              Semua pemasukan proyek telah dilengkapi, proyek tidak dapat diubah setelah dibuat.
            </p>
            <p className="text-gray-700 mt-4 font-medium">
              Selesai membuat proyek?
            </p>
          </div>
        )}

        {/* Footer Buttons */}
        <div className="flex justify-end mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded mr-2"
            >
              Kembali
            </button>
          )}
          <button
            onClick={nextStep}
            className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          >
            {step < 5 ? "Lanjut" : "Selesai"}
          </button>
        </div>
      </div>
    </div>
  );
}
