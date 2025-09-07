import { Message } from "@/Types/types";
import { getTime } from "@/utilities/util";
import Image from "next/image";
import DropDown from "./DropDown";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const ChatBubble = ({ message }: { message: Message }) => {
  return (
    <div className="relative">
      <div
        className={`chat ${
          message.type === "sent" ? "chat-end" : "chat-start"
        } `}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image
              alt="Tailwind CSS chat bubble component"
              src={
                message.sender?.image
                  ? message.sender.image
                  : "/images/default-user-image.jpg"
              }
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="chat-header text-base-content ">
          {message.sender?.name}
          <time className="text-xs opacity-50 text-base-content">
            {getTime(message.timestamp)}
          </time>
        </div>

        <div className="chat-bubble relative max-w-[80%]">
          {message.text}{" "}
          <DropDown
            label={<EllipsisVerticalIcon className="size-4" />}
            className={`absolute ${
              message.type === "sent"
                ? "top-0 left-0 -translate-x-10"
                : "inset-0 translate-x-10"
            }  translate-y-0.5 z-10 size-2.5`}
          >
            <li>
              <Link href="/profile" className="text-main">
                <PencilSquareIcon className="size-4" /> Edit
              </Link>
            </li>
            <li className="text-red-500">
              <Link href="/login">
                <TrashIcon className="size-4" />
                Delete
              </Link>
            </li>
          </DropDown>
        </div>

        <div className="chat-footer opacity-50 text-base-content">
          Delivered
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
