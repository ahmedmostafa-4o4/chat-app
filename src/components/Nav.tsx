import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <nav className="navbar bg-base-100 flex justify-between items-center p-4">
      <p className="text-xl opacity-60 tracking-wide ">Chats</p>

      <DropDown
        label={
          <Link href={"/"} className="btn btn-circle btn-ghost">
            <Image
              src="/images/my-photo.jpg"
              width={30}
              height={30}
              alt="User image"
              className="object-cover rounded-full"
            />
          </Link>
        }
      >
        <li>
          <a href="">
            <UserCircleIcon className="size-4" /> Profile
          </a>
        </li>
        <li className="text-red-500">
          <a href="">
            <ArrowLeftStartOnRectangleIcon className="size-4" />
            Logout
          </a>
        </li>
      </DropDown>
    </nav>
  );
};

export default Nav;
