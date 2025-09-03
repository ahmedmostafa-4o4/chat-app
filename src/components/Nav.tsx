"use client";

import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";
import { PlusIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useUserStore } from "@/store/store";
import { useRouter } from "next/navigation";
const Nav = ({ path }: { path: string }) => {
  const userImage = useUserStore((state) => state.user?.image);
  const router = useRouter();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`/?sidebar=search&s=${e.target.value}`);
  };
  return (
    <nav className="navbar bg-base-100 flex justify-between items-center p-4">
      {path === "search" ? (
        <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            className="border-b border-gray-400 focus:outline-none w-full"
            onChange={handleSearchChange}
          />
          <button
            className="btn btn-circle btn-ghost "
            onClick={() => router.push("/")}
          >
            <ArrowLeftStartOnRectangleIcon className="size-4" />
          </button>
        </div>
      ) : (
        <>
          <p className="text-xl opacity-60 tracking-wide ">Chats</p>
          <div className="flex items-center gap-2">
            {" "}
            <button
              className="btn btn-circle btn-ghost"
              onClick={() => router.push("/?sidebar=search")}
            >
              <PlusIcon className="size-4" />
            </button>
            <DropDown
              label={
                <Link href={"/"} className="btn btn-circle btn-ghost">
                  <Image
                    src={userImage || "/images/default-user-image.jpg"}
                    width={30}
                    height={30}
                    alt="User image"
                    className="object-cover rounded-full"
                  />
                </Link>
              }
            >
              <li>
                <Link href="/profile">
                  <UserCircleIcon className="size-4" /> Profile
                </Link>
              </li>
              <li className="text-red-500">
                <Link href="/login">
                  <ArrowLeftStartOnRectangleIcon className="size-4" />
                  Logout
                </Link>
              </li>
            </DropDown>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
