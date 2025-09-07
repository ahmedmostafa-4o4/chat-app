"use client";
import { useSearchParams } from "next/navigation";
import MyChats from "./MyChats";
import Nav from "./Nav";
import { usersData } from "@/data/usersData";
import SearchItems from "./SearchItems";
import { Suspense } from "react";

const SideBar = ({ isSmaller }: { isSmaller: boolean }) => {
  const params = useSearchParams();
  const mode = params.get("sidebar");
  const users = usersData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`min-w-xs ${isSmaller ? "w-full" : "w-xl"}`}>
        <ul className="list rounded-none bg-base-100 rounded-box shadow-md h-screen overflow-y-auto">
          <Nav path={mode} />
          {mode === "search" ? (
            <SearchItems user={users[0]} />
          ) : (
            users.map((user) => <MyChats key={user?.id} user={user} />)
          )}
        </ul>
      </div>
    </Suspense>
  );
};

export default SideBar;
