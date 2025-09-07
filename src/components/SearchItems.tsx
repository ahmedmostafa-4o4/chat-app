import { User } from "@/Types/types";
import UserImage from "./UserImage";
import { trimText } from "@/utilities/util";
import { useChatStore } from "@/store/store";

const SearchItems = ({ user }: { user: User }) => {
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const currentChat = useChatStore((state) => state.currentChat);

  return (
    <li
      className={`list-row rounded-none cursor-pointer hover:bg-base-300 items-center gap-2 p-2 ${
        currentChat?.id === user?.id && "hover:bg-base-300"
      }`}
      onClick={() => {
        setCurrentChat(user);
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
