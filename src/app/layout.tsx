import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "School Name",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
  <ClerkProvider>
    <html lang="en" className="h-full">
      <body className="h-screen max-h-screen w-screen max-w-screen overflow-hidden">
        {children}<ToastContainer position="top-right" theme="dark"/>
      </body>
    </html>
  </ClerkProvider>
  );
}
