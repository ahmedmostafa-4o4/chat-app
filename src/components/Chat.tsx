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
    <div className="flex flex-col w-full h-screen sm:h-dvh w-xs:h-dvh">
      {currentChat ? (
        <>
          <ChatHeader
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
          />
          <div className="h-max w-full overflow-y-auto text-center flex-3/4 align-middle dark:text-white bg-gray-100 p-3">
            {messagesFetch.map((message, index) => (
              <ChatBubble key={index} message={message} />
            ))}
          </div>
          <NewMessage />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
