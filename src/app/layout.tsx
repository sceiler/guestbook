import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import Footer from "./footer";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guestbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <NavMenu />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
