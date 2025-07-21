"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import DropDown from "./DropDown";
import UserImage from "./UserImage";
import { trimText } from "@/utilities/util";
import { User } from "@/Types/types";
import { useChatStore } from "@/store/store";

const MyChats = ({ user }: { user: User }) => {
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const currentChat = useChatStore((state) => state.currentChat);
  return (
    <li
      className={`list-row rounded-none cursor-pointer hover:bg-primary dark:hover:bg-gray-700 ${
        currentChat?.id === user?.id && "bg-primary dark:bg-gray-700"
      }`}
      onClick={() => {
        setCurrentChat(user);
      }}
    >
      <div>
        <UserImage user={user} />
      </div>
      <div>
        <div className="font-semibold" title="Dio Lupa">
          {trimText(`${user?.name}`, 20)}
        </div>
        <div
          className="text-xs uppercase opacity-60"
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
            className="size-3"
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
          <a href="">
            <TrashIcon className="size-4" /> Delete Chat
          </a>
        </li>
      </DropDown>
    </li>
  );
};

export default MyChats;
