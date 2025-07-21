export type User = {
  name: string;
  image: string | null;
  online: boolean;
  id: string;
} | null;

export type ChatState = {
  currentChat: User | null;
  setCurrentChat: (chat: User) => void;
};

export type Message = {
  sender: User;
  text: string;
  type: "sent" | "received";
  timestamp: string;
};
