import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const mockUser = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    localStorage.setItem("user", JSON.stringify(mockUser));
    window.location.href = "/"; // reload to trigger App.js state
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://github.com/arlecchi/image-hosting/blob/6c50b9c530b9b88448c8d492a0cc70d8ae6a7633/signuppage.jpg?raw=true')",
      }}
    >
      {/* Register Card */}
      <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10 w-full max-w-md text-center border border-gray-200">
        {/* Logo */}
        <img
          src="https://github.com/arlecchi/image-hosting/blob/6c50b9c530b9b88448c8d492a0cc70d8ae6a7633/prpllogo.png?raw=true"
          alt="NusaDana Logo"
          className="mx-auto mb-4 w-16"
        />

        <p className="text-sm text-gray-600 mb-1">
          Bersama Kami Bangun Desamu
        </p>
        <h2 className="text-lg font-semibold mb-6">Mulai Daftar Sekarang</h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Daftar Sekarang
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-sky-600 hover:underline">
            Masuk Sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
