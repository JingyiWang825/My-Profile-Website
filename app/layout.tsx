import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_SC, Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const serif = Noto_Serif_SC({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Iliad · 叙事与 AI",
  description: "AI 产品经理的个人主页，极简秩序与数字感官的共生场。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
