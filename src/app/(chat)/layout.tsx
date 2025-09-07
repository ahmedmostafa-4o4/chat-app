"use client";
import "@/app/globals.css";

import SideBar from "@/components/SideBar";
import { useChatStore } from "@/store/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const ChatLayout = ({
  children,
}: {
  children: React.ReactNode;
  params: Promise<URLSearchParams>;
}) => {
  const currentChat = useChatStore((state) => state.currentChat);
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const params = useSearchParams();
  const mode = params.get("mode") || null;
  const [isSmallerScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (mode !== "chat") setCurrentChat(null);
  }, [setCurrentChat, mode]);

  useEffect(() => {
    const checkWidth = () => setIsSmallScreen(window.innerWidth < 768);
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  function display() {
    const sidebar = <SideBar isSmaller={isSmallerScreen} />;

    if (isSmallerScreen) {
      return (
        <Suspense>
          {" "}
          <div className="flex">{currentChat ? children : sidebar}</div>
        </Suspense>
      );
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex">
          {sidebar}
          {children}
        </div>
      </Suspense>
    );
  }
  return display();
};

export default ChatLayout;
