import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camber Consulting | Operational Clarity",
  description: "Operational systems consulting for founder-led teams in the RGV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
