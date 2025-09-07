"use client";
import { useChatStore } from "@/store/store";
import ChatBubble from "./ChatBubble";
import { messages } from "@/data/messages";
import { Message } from "@/Types/types";
import NewMessage from "./NewMessage";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const messagesFetch: Message[] = messages;

  return (
    <div className="flex flex-col w-full h-dvh relative">
      {currentChat ? (
        <>
          <ChatHeader
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
          />

          {/* Messages */}
          <div className="flex-grow w-full overflow-y-auto text-center dark:text-white bg-base-100 p-3">
            {messagesFetch.map((message, index) => (
              <ChatBubble key={index} message={message} />
            ))}
          </div>

          <NewMessage />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-base-100">
          <p className="text-base-content">Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
