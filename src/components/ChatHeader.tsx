import {
  ArrowUturnLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import DropDown from "./DropDown";
import { ChatState } from "@/Types/types";
import { useRouter } from "next/navigation";

const ChatHeader = ({ currentChat, setCurrentChat }: ChatState) => {
  const router = useRouter();

  return (
    <header className="w-full p-2 bg-base-300 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="btn btn-circle btn-ghost text-base-content"
            onClick={() => {
              setCurrentChat(null);
              router.push("/");
            }}
          >
            <ArrowUturnLeftIcon className="size-4 text-base-content" />
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
              <p className="font-semibold text-sm text-base-content">
                {currentChat?.name}
              </p>
              <p className="text-xs text-base-content">
                {currentChat?.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        <DropDown
          label={<EllipsisVerticalIcon className="size-4 text-base-content" />}
        >
          <li className="text-base-content">Delete</li>
        </DropDown>
      </div>
    </header>
  );
};

export default ChatHeader;
