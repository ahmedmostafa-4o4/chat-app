import Chat from "@/components/Chat";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Chat App",
  description: "...",
};

export default async function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Chat />
    </Suspense>
  );
}
