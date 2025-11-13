import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const mockUser = { name: "Admin", email: "user@example.com" };
    localStorage.setItem("user", JSON.stringify(mockUser));
    window.location.href = "/"; // reload to trigger App.js state
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://github.com/arlecchi/image-hosting/blob/6c50b9c530b9b88448c8d492a0cc70d8ae6a7633/loginpage.jpg?raw=true')",
      }}
    >
      {/* Login Card */}
      <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10 w-full max-w-md text-center border border-gray-200">
        {/* Logo */}
        <img
          src="https://github.com/arlecchi/image-hosting/blob/6c50b9c530b9b88448c8d492a0cc70d8ae6a7633/prpllogo.png?raw=true"
          alt="NusaDana Logo"
          className="mx-auto mb-4 w-16"
        />

        <p className="text-sm text-gray-600 mb-1">
          Untuk Infrastruktur Desa Lebih Maju
        </p>
        <h2 className="text-lg font-semibold mb-6">
          Selamat Datang, Masuk Sekarang
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Masuk Sekarang
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-sky-600 hover:underline">
            Daftar Sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
