import { Message } from "@/Types/types";
import { getTime } from "@/utilities/util";
import Image from "next/image";

const ChatBubble = ({ message }: { message: Message }) => {
  return (
    <div
      className={`chat ${message.type === "sent" ? "chat-end" : "chat-start"}`}
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
      <div className="chat-header">
        {message.sender?.name}
        <time className="text-xs opacity-50">{getTime(message.timestamp)}</time>
      </div>
      <div className="chat-bubble">{message.text}</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default ChatBubble;
