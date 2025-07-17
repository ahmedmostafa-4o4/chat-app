import { User } from "@/Types/types";
import { create } from "zustand";

interface ChatState {
  currentChat: User | null;
  setCurrentChat: (chat: User) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  currentChat: null,
  setCurrentChat: (chat) => set({ currentChat: chat }),
}));
