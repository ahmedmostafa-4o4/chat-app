"use client";

import "./globals.css";

import SideBar from "@/components/SideBar";
import { useChatStore } from "@/store/store";
import { useEffect, useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentChat = useChatStore((state) => state.currentChat);
  const [isSmallerScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsSmallScreen(window.innerWidth < 768);
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  function display() {
    const sidebar = <SideBar isSmaller={isSmallerScreen} />;

    if (isSmallerScreen) {
      return <div className="flex">{currentChat ? children : sidebar}</div>;
    }

    // Default: larger screens
    return (
      <div className="flex">
        {sidebar}
        {children}
      </div>
    );
  }

  return (
    <html lang="en">
      <body> {display()}</body>
    </html>
  );
}
