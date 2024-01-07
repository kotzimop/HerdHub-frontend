import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Provider from "@/redux/provider";
import { Footer, Navbar } from "@/components/common";
import { Setup } from "@/components/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iHerdHub",
  description: "iHerdHub livestock management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          {children}
        </Provider>
      </body>
    </html>
  );
}
