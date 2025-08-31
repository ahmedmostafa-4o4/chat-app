import {
  ArrowUturnLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import DropDown from "./DropDown";
import { ChatState } from "@/Types/types";

const ChatHeader = ({ currentChat, setCurrentChat }: ChatState) => {
  return (
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
  );
};

export default ChatHeader;
