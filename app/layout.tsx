import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Pocketflow",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-row bg-zinc-900 antialiased">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
