import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistem Restoran Internal",
  description: "Sistem Manajemen & POS untuk operasional restoran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {children} adalah tempat di mana halaman kita (seperti login) akan ditampilkan */}
        {children}
      </body>
    </html>
  );
}
