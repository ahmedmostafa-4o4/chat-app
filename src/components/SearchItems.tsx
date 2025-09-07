import { User } from "@/Types/types";
import UserImage from "./UserImage";
import { trimText } from "@/utilities/util";
import { useChatStore } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const SearchItems = ({ user }: { user: User }) => {
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const currentChat = useChatStore((state) => state.currentChat);
  const router = useRouter();
  const params = useSearchParams();
  const allParams = Object.fromEntries(params.entries());

  const pendingUser = useRef<User | null>(null);
  const handleSelectChat = () => {
    pendingUser.current = user; // store the clicked user temporarily
    if (params.get("mode") !== "chat") {
      const queryString = new URLSearchParams({
        ...allParams,
        mode: "chat",
      }).toString();

      router.push(`/?${queryString}`);
    } else {
      setCurrentChat(user); // if already in ?mode=chat
    }
  };

  useEffect(() => {
    if (params.get("mode") === "chat" && pendingUser.current) {
      setCurrentChat(pendingUser.current);
      pendingUser.current = null; // clear after setting
    }
  }, [params, setCurrentChat]);
  return (
    <li
      className={`list-row rounded-none cursor-pointer hover:bg-base-300 items-center gap-2 p-2 ${
        currentChat?.id === user?.id && "hover:bg-base-300 bg-base-300"
      }`}
      onClick={() => {
        handleSelectChat();
      }}
    >
      <div className="h-12">
        <UserImage user={user} />
      </div>
      <div>
        <div className="flex items-center justify-between text-base-content">
          <p className="font-semibold" title="Dio Lupa">
            {user?.name}
          </p>
          <p className="text-xs text-base-content" title="Dio Lupa">
            01025250321
          </p>
        </div>
        <div className="text-xs opacity-60 text-base-content">
          <p>ahmed@gmail.com</p>
          <p
            title="Remaining Reason Remaining ReasonRemaining ReasonRemaining
          ReasonRemaining ReasonRemaining ReasonRemaining Reason"
          >
            {trimText(
              "Remaining Reason Remaining ReasonRemaining ReasonRemainingReasonRemaining ReasonRemaining ReasonRemaining Reason",
              45
            )}
          </p>
        </div>
      </div>
    </li>
  );
};

export default SearchItems;
