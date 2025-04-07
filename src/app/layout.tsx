import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI20 Profile Picture Frame",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="instructions">
          <h1>Welcome to the AI20 Profile Picture Frame Generator!</h1>
          <p>
            Follow the steps below to customize your profile picture:
          </p>
          <ol>
            <li>Upload your image.</li>
            <li>Adjust your image. (Use 2 fingers to move the image)</li>
            <li>Download your customized profile picture with the AI20 Frame.</li>
          </ol>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}