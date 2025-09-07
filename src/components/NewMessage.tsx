import DropDown from "./DropDown";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  FaceSmileIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

const NewMessage = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

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

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    console.log("Sending message:", message);
    setMessage("");
  };

  const handleImageSend = () => {
    if (files.length > 0) console.log("Sending image:", files);
    if ((files.length = 0)) return;
    setFiles([]);
  };

  const handleSend = () => {
    handleSendMessage();
    handleImageSend();
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles((prev) => [...prev, ...e.target.files!]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const onInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [message]);

  useEffect(() => {
    const handleResize = () => {
      adjustHeight();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [message]);

  return (
    <div className="bg-base-300">
      <div className="flex flex-wrap">
        {files.map((file, index) => (
          <div
            key={index}
            className="m-2 p-1 w-24 h-24 bg-base-300 rounded-2xl relative"
          >
            <Image
              src={URL.createObjectURL(file)}
              width={50}
              height={50}
              className="object-contain w-full h-full rounded-2xl"
              alt="f"
              loader={() => URL.createObjectURL(file)}
            />
            <XMarkIcon
              className="size-4 absolute top-[-5px] right-[-5px] btn btn-circle btn-ghost bg-main text-white"
              onClick={() => {
                setFiles((prev) => prev.filter((f) => f !== file));
              }}
            />
          </div>
        ))}
      </div>
      <div className="w-full  flex items-center bg-base-300">
        <div>
          <button
            className="btn btn-circle btn-ghost text-base-content"
            onClick={() => {
              imageInputRef.current?.click();
            }}
          >
            <input
              type="file"
              hidden={true}
              id="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              ref={imageInputRef}
            />
            <PhotoIcon className="size-4" />
          </button>
          <DropDown
            direction="dropdown-top"
            label={
              <button className="btn btn-circle btn-ghost text-base-content">
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
            className="input w-full focus:outline-none focus:ring-0 focus:border-accent-content resize-none overflow-y-auto h-auto p-2 max-h-40 overflow-x-hidden text-base-content"
            value={message}
            onKeyDown={onInputKeyDown}
            onChange={handleInputChange}
          ></textarea>

          <button
            className="btn btn-circle btn-ghost text-base-content"
            onClick={handleSend}
          >
            <PaperAirplaneIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
