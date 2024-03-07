import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"],
weight:['400','500','600','700'],
variable:'--font-poppins'
});

export const metadata: Metadata = {
  title: "Win Job",
  description: "Win Job to create CV and Cover letter for user. And make it easy for user.",
  icons:{
    icon:'/public/assets/images/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
