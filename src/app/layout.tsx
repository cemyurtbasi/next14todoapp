import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "@/lib/Redux/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Todo app with mock backend",
  description: "Created for Vodafone interview to be reviewed :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
