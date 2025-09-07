"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import DropDown from "./DropDown";
import UserImage from "./UserImage";
import { trimText } from "@/utilities/util";
import { User } from "@/Types/types";
import { useChatStore } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";

const MyChats = ({ user }: { user: User }) => {
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const router = useRouter();
  const params = useSearchParams();
  const currentChat = useChatStore((state) => state.currentChat);
  return (
    <li
      className={`list-row rounded-none cursor-pointer hover:bg-base-300 ${
        currentChat?.id === user?.id && "bg-base-300"
      }`}
      onClick={() => {
        if (!params.get("mode")) router.push("/?mode=chat");
        setCurrentChat(user);
      }}
    >
      <div>
        <UserImage user={user} />
      </div>
      <div>
        <div className="font-semibold text-base-content" title="Dio Lupa">
          {trimText(`${user?.name}`, 20)}
        </div>
        <div
          className="text-xs opacity-60 text-base-content"
          title="Remaining Reason Remaining ReasonRemaining ReasonRemaining
          ReasonRemaining ReasonRemaining ReasonRemaining Reason"
        >
          {trimText(
            "Remaining Reason Remaining ReasonRemaining ReasonRemainingReasonRemaining ReasonRemaining ReasonRemaining Reason",
            50
          )}
        </div>
      </div>
      <DropDown
        label={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3 text-base-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        }
      >
        <li className="text-red-500">
          <a href="" className="flex items-center">
            <TrashIcon className="size-4" /> Delete Chat
          </a>
        </li>
      </DropDown>
    </li>
  );
};

export default MyChats;
