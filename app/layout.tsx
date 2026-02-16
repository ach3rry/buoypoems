import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "浮标 BUOY - 先锋诗歌团体",
  description: "先锋 · 年轻 · 探索",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-ukiyo-shironeri">{children}</body>
    </html>
  );
}
