import { User } from "@/Types/types";
import { create } from "zustand";

interface ChatState {
  currentChat: User | null;
  setCurrentChat: (chat: User) => void;
}

interface userState {
  user: User | null;
  setCurrentUser: (user: User) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  currentChat: null,
  setCurrentChat: (chat) => set({ currentChat: chat }),
}));

export const useUserStore = create<userState>((set) => ({
  user: {
    name: "Ahmed Mostafa",
    email: "ahmed@gmail.com",
    phone_number: "01025250321",
    bio: "I am a software engineer",
  },
  setCurrentUser: (user) => {
    set({ user });
  },
}));
