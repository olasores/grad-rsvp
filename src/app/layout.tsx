import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oyinkansola Olayinka | Graduation Ceremony RSVP",
  description:
    "You're invited to celebrate Oyinkansola Olayinka's graduation ceremony. RSVP now!",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
