import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./fonts";

export const metadata: Metadata = {
  title: "justcarlux.dev"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-slate-600 to-slate-900 ${raleway.className} text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
