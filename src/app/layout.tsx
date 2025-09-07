import "@/app/globals.css";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <html lang="en">
        <body> {children}</body>
      </html>
    </Suspense>
  );
}
