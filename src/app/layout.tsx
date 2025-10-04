import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Primary font for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Font for headings
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interview Questions & Answers | Frontend Development",
  description: "Master HTML, CSS, JavaScript, React, and Next.js with curated interview questions and comprehensive answers.",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%234F46E5"/><text x="50" y="50" font-size="60" text-anchor="middle" dominant-baseline="central" fill="white" font-weight="bold">Q</text><text x="70" y="70" font-size="35" text-anchor="middle" dominant-baseline="central" fill="white" font-weight="bold">A</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%234F46E5"/><text x="50" y="50" font-size="60" text-anchor="middle" dominant-baseline="central" fill="white" font-weight="bold">Q</text><text x="70" y="70" font-size="35" text-anchor="middle" dominant-baseline="central" fill="white" font-weight="bold">A</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%234F46E5"/><text x="50" y="50" font-size="60" text-anchor="middle" dominant-baseline="central" fill="white" font-weight="bold">Q</text><text x="70" y="70" font-size="35" text-anchor="middle" dominant-baseline="central" fill="white" font-weight="bold">A</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {children}
      </body>
    </html>
  );
}
