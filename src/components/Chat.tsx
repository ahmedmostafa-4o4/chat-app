"use client";
import { useChatStore } from "@/store/store";
import {
  ArrowUturnLeftIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import DropDown from "./DropDown";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

const Chat = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState<string>("");

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    }
  };

  const adjustHeight = () => {
    setTimeout(() => {
      if (messageInputRef.current) {
        messageInputRef.current.style.height = "auto";
        messageInputRef.current.style.height = `${
          messageInputRef.current.scrollHeight + 1
        }px`;
      }
    }, 100);
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    adjustHeight();
  }, [message]);

  console.log(message);
  return (
    <div className="flex flex-col w-full h-screen">
      {currentChat ? (
        <header className="w-full p-2 dark:bg-gray-800 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="btn btn-circle btn-ghost"
                onClick={() => {
                  setCurrentChat(null);
                }}
              >
                <ArrowUturnLeftIcon className="size-4 " />
              </button>

              <div className="flex items-center gap-2 h-full">
                <Image
                  src={currentChat?.image || "/images/default-user-image.jpg"}
                  width={30}
                  height={30}
                  alt="User Image"
                  className="object-cover rounded-full w-8 h-8"
                />
                <div>
                  <p className="font-semibold text-sm">{currentChat?.name}</p>
                  <p className="text-xs">
                    {currentChat?.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </div>

            <DropDown label={<EllipsisVerticalIcon className="size-4 " />}>
              <li>Delete</li>
            </DropDown>
          </div>
        </header>
      ) : null}

      <div className="h-max w-full text-center flex-3/4 align-middle dark:text-white bg-gray-100 grid place-items-center text-4xl">
        {currentChat ? currentChat.name : "Select a chat"}
      </div>
      <div className="w-full bg-white dark:bg-gray-700 flex items-center">
        <div>
          <button
            className="btn btn-circle btn-ghost"
            onClick={() => {
              imageInputRef.current?.click();
            }}
          >
            <input
              type="file"
              hidden={true}
              id="file"
              accept="image/*"
              ref={imageInputRef}
            />
            <PhotoIcon className="size-4" />
          </button>
          <DropDown
            direction="dropdown-top"
            label={
              <button className="btn btn-circle btn-ghost">
                <FaceSmileIcon className="size-4" />
              </button>
            }
          >
            <div onMouseOverCapture={(e) => e.stopPropagation()}>
              <EmojiPicker
                onEmojiClick={(e) => {
                  setMessage((prev) => prev + e.emoji);
                }}
                className="!pointer-events-auto !display-block !z-50 !w-64 md:!w-96"
              />
            </div>
          </DropDown>
        </div>
        <div className="flex items-center flex-1 gap-2 p-2">
          <textarea
            ref={messageInputRef}
            rows={1}
            placeholder="Type here"
            className="input w-full focus:outline-none focus:ring-0 focus:border-accent-content resize-none overflow-y-auto h-auto p-2 max-h-40 overflow-x-hidden "
            value={message}
            onKeyDown={onInputKeyDown}
            onChange={(e) => {
              setTimeout(() => {
                adjustHeight();
              }, 10);
              setMessage(e.target.value);
            }}
          ></textarea>

          <button className="btn btn-circle btn-ghost">
            <PaperAirplaneIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
