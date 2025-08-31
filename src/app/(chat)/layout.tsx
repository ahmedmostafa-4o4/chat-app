"use client";
import "@/app/globals.css";

import SideBar from "@/components/SideBar";
import { useChatStore } from "@/store/store";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ChatLayout = ({
  children,
}: {
  children: React.ReactNode;
  params: Promise<URLSearchParams>;
}) => {
  const currentChat = useChatStore((state) => state.currentChat);
  const params = useSearchParams();
  const sidebarMode = params.get("sidebar");
  const [isSmallerScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsSmallScreen(window.innerWidth < 768);
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  function display() {
    const sidebar = <SideBar isSmaller={isSmallerScreen} mode={sidebarMode} />;

    if (isSmallerScreen) {
      return <div className="flex">{currentChat ? children : sidebar}</div>;
    }

    return (
      <div className="flex">
        {sidebar}
        {children}
      </div>
    );
  }
  return display();
};

export default ChatLayout;
