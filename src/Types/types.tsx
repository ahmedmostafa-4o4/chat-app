export type User = {
  name: string;
  email?: string;
  image?: string | null;
  about?: string | null;
  bio?: string | null;
  phone_number?: string | null;
  online?: boolean;
  id?: string;
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

export interface registerUser {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  confirmPassword: string;
}

export interface loginUser {
  email: string;
  password: string;
}
