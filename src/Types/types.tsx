export type User = {
  name: string;
  image: string | null;
  online: boolean;
  id: string;
};

export type ChatState = {
  currentChat: User | null;
  setCurrentChat: (chat: User) => void;
};
