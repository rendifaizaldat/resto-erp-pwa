// file: apps/pwa-internal/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";
import { signInWithPassword } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (credentials: {
    email?: string;
    password?: string;
  }) => {
    setIsLoading(true);
    setErrorMessage(null);

    const { error } = await signInWithPassword(credentials);

    if (error) {
      setErrorMessage(error.message);
    } else {
      router.push("/dashboard"); // Arahkan ke dasbor setelah berhasil
    }

    setIsLoading(false);
  };

  return (
    <main className="grid w-full min-h-screen lg:grid-cols-2">
      {/* Kolom Kiri: Branding & Gambar */}
      <div className="hidden lg:flex flex-col items-center justify-center p-12 text-white bg-indigo-600">
        <div className="text-center">
          {/* Ganti dengan logo Anda nanti */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21.92,5.54C21.49,3.7,19.91,2.2,18.08,1.83L12,0L5.92,1.83C4.09,2.2,2.51,3.7,2.08,5.54L0,12l2.08,6.46C2.51,20.3,4.09,21.8,5.92,22.17L12,24l6.08-1.83c1.83-.37,3.41-1.87,3.84-3.63L24,12l-2.08-6.46zM12,14c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2z" />
          </svg>
          <h1 className="text-4xl font-bold tracking-tighter">RestoSys</h1>
          <p className="mt-2 text-lg text-indigo-200">
            Sistem Manajemen Restoran Terintegrasi
          </p>
        </div>
      </div>

      {/* Kolom Kanan: Form Login */}
      <div className="flex items-center justify-center p-6 bg-gray-50">
        <LoginForm
          onLogin={handleLogin}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </div>
    </main>
  );
}
