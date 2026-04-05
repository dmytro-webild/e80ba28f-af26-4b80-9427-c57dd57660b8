import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Mobi\'s Mechanical & Body Repairs | Trusted Dandenong Mechanics',
  description: 'Looking for a mechanic in Dandenong? Mobi\'s Mechanical offers affordable and reliable car repairs, logbook servicing, and body repair. Book your service today!',
  keywords: ["Mechanic Dandenong, Car repair Dandenong, Affordable mechanic near me, Mobi's Mechanical, Body repairs Dandenong"],
  openGraph: {
    "title": "Mobi's Mechanical & Body Repairs | Trusted Dandenong Mechanics",
    "description": "Expert mechanical and body repairs for Dandenong drivers. Reliable, affordable, and experienced.",
    "type": "website",
    "siteName": "Mobi’s Mechanical"
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
