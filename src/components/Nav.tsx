"use client";

import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";
import { PlusIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useUserStore } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import ThemeSwitcher from "./ThemeChange";
const Nav = ({ path }: { path: string | null }) => {
  const userImage = useUserStore((state) => state.user?.image);
  const params = useSearchParams();
  const allParams = Object.fromEntries(params.entries());
  const router = useRouter();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const queryString = new URLSearchParams({
      ...allParams,
      s: e.target.value,
    }).toString();
    router.push(`/?${queryString}`);
  };
  return (
    <nav className="navbar bg-base-100 flex justify-between items-center p-4">
      {path === "search" ? (
        <div className="flex items-center gap-2 w-full text-base-content">
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            className="border-b border-gray-400 focus:outline-none w-full"
            onChange={handleSearchChange}
          />
          <select className="select border-none w-full max-w-xs text-xs">
            <option disabled value={""} className="option">
              Search By
            </option>
            <option value={"name"}>Name</option>
            <option value={"email"}>Email</option>
            <option value={"phone"}>Phone number</option>
          </select>
          <button
            className="btn btn-circle btn-ghost text-base-content"
            onClick={() => router.push("/")}
          >
            <ArrowLeftStartOnRectangleIcon className="size-4" />
          </button>
        </div>
      ) : (
        <>
          <p className="text-xl opacity-60 tracking-wide text-base-content">
            Chats
          </p>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <button
              className="btn btn-circle btn-ghost text-base-content"
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
              <li className="text-base-content">
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
