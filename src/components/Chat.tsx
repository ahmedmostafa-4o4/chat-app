"use client";
import { useChatStore } from "@/store/store";

const Chat = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  return (
    <div className="h-screen w-full text-center align-middle dark:text-white bg-gray-100 grid place-items-center text-4xl">
      {currentChat ? currentChat.name : "Select a chat"}
    </div>
  );
};

export default Chat;
