import Card from "../components/Card";
import { Plus, FilePlus, FolderOpen } from "lucide-react";

export default function Project() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Projek</h2>

      {/* Top Section: Projek & Prioritisasi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Projek Card */}
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold">Projek</h3>
            <button className="flex items-center gap-1 bg-sky-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-sky-700">
              <Plus size={16} /> Tambah
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border text-sm">
              <thead className="bg-sky-50 text-gray-700">
                <tr>
                  <th className="px-3 py-2 border text-left">Projek</th>
                  <th className="px-3 py-2 border text-left">Dana</th>
                  <th className="px-3 py-2 border text-left">Skor</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-center">
                <tr>
                  <td className="px-3 py-2 border text-gray-400" colSpan="3">
                    Belum ada projek
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer (horizontal layout) */}
          <div className="border-t pt-4 flex items-center justify-between">
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
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Perkiraan Dana</p>
              <p className="text-lg font-semibold text-sky-700">0</p>
            </div>
          </div>
        </Card>

        {/* Prioritisasi Card */}
        <Card>
          <h3 className="text-base font-semibold mb-3">Prioritisasi</h3>

          {/* Table */}
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border text-sm">
              <thead className="bg-sky-50 text-gray-700">
                <tr>
                  <th className="px-3 py-2 border text-left">Rank</th>
                  <th className="px-3 py-2 border text-left">Projek</th>
                  <th className="px-3 py-2 border text-left">Dana</th>
                  <th className="px-3 py-2 border text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-center">
                <tr>
                  <td className="px-3 py-2 border text-gray-400" colSpan="4">
                    Belum ada prioritisasi
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer (horizontal layout) */}
          <div className="border-t pt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-sky-100 p-3 rounded-lg">
                <FilePlus className="text-sky-600" size={24} />
              </div>
              <div>
                <p className="font-medium text-gray-800">Buat Projek Sekarang</p>
                <p className="text-sm text-gray-500">
                  Ajukan proposal dari projek yang telah dibuat
                </p>
              </div>
            </div>
            <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg cursor-not-allowed">
              Buat Proposal
            </button>
          </div>
        </Card>
      </div>

      {/* Bottom Section: Proposal & Proposal Terakhir */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Proposal">
          <p className="text-gray-700 font-medium">Belum ada proposal</p>
          <p className="text-gray-500 text-sm">Ajukan dana terlebih dahulu</p>
        </Card>

        <Card title="Proposal Terakhir">
          <p className="text-gray-700 font-medium">Belum ada proposal</p>
          <p className="text-gray-500 text-sm">Ajukan dana terlebih dahulu</p>
        </Card>
      </div>
    </div>
  );
}


