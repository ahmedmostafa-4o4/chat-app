import Chat from "@/components/Chat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat App",
  description: "...",
};
export default function Home() {
  return <Chat />;
}
