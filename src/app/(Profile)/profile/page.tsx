"use client";

import { useUserStore } from "@/store/store";
import {
  ArrowLeftStartOnRectangleIcon,
  CameraIcon,
  Cog8ToothIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const imageRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const nameRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState(
    user?.image || "/images/default-user-image.jpg"
  );

  const [nameEditing, setNameEditing] = useState(false);
  const [bioEditing, setBioEditing] = useState(false);
  const handleImageChange = () => {
    imageRef.current?.click();
  };

  const handleOnChange = () => {
    if (imageRef.current?.files?.[0]) {
      setImageSrc(URL.createObjectURL(imageRef.current?.files[0]));
    } else {
      setImageSrc(user?.image || "/images/default-user-image.jpg");
    }
  };

  const handleNameSave = () => {
    // 🔹 Call API here to save changes
    console.log("Saving name:", name);
    setNameEditing(false);
  };
  const handleBioSave = () => {
    // 🔹 Call API here to save changes
    console.log("Saving name:", name);
    setBioEditing(false);
  };
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-main"></div>
      <div className="container mx-auto p-2.5 gird place-items-center h-screen">
        <div className="mt-12">
          <div className="relative w-[150px] h-[150px] mx-auto mb-4">
            <Image
              src={imageSrc}
              width={200}
              height={200}
              alt="User image"
              className="object-contain rounded-full w-full h-full bg-white"
              priority
            />
            <input
              type="file"
              accept="image/*"
              name="profile_image"
              onChange={handleOnChange}
              ref={imageRef}
              hidden
            />
            <button
              className="btn btn-circle absolute right-1 bottom-1"
              onClick={handleImageChange}
            >
              <CameraIcon className="size-4" />
            </button>
          </div>
          <div className="relative flex items-center gap-2">
            {nameEditing ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  ref={nameRef}
                  onBlur={handleNameSave}
                  autoFocus
                  className="text-center font-bold text-2xl border-b border-gray-400 focus:outline-none"
                />
              </>
            ) : (
              <>
                <p className="text-center font-bold text-2xl flex-1">{name}</p>
                <button
                  className="btn btn-circle btn-ghost absolute top-[-5px] right-[-45px]"
                  aria-label="Edit"
                  onClick={setNameEditing.bind(null, true)}
                >
                  {" "}
                  <PencilSquareIcon className="size-4" />{" "}
                </button>
              </>
            )}
          </div>

          <p className="text-center text-gray-500">{user?.email}</p>
          <p className="text-center text-gray-500">{user?.phone_number}</p>
        </div>

        <div className="mt-8 grid place-items-center">
          <div className="relative w-fit">
            {bioEditing ? (
              <>
                <input
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  ref={bioRef}
                  autoFocus
                  onBlur={handleBioSave}
                  className="text-center font-bold text-2xl border-b border-gray-400 focus:outline-none"
                />
              </>
            ) : (
              <>
                <p className="text-center font-bold text-2xl flex-1 mb-4">
                  Bio
                </p>
                <p className="text-center w-2/3 mx-auto">{bio}</p>
                <button
                  className="btn btn-circle btn-ghost absolute top-[-5px] right-[-45px]"
                  aria-label="Edit"
                  onClick={setBioEditing.bind(null, true)}
                >
                  {" "}
                  <PencilSquareIcon className="size-4" />{" "}
                </button>
              </>
            )}
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-2">
          <Link
            href="/profile/settings"
            className="btn btn-circle btn-ghost"
            aria-label="Settings"
          >
            <Cog8ToothIcon className="size-6" />
          </Link>
          <button
            className="btn btn-circle btn-ghost text-red-500"
            aria-label="Logout"
          >
            <ArrowLeftStartOnRectangleIcon className="size-6" />
          </button>
        </div>
        {/* <div>
          <div className="flex flex-col mb-4">
            <label htmlFor="name">Name</label>
            <div>
              <input
                type="text"
                name="name"
                value={user?.name}
                className="input mr-1.5"
                disabled
              />
              <button className="btn btn-square btn-ghost">
                <PencilSquareIcon className="size-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                name="email"
                value={user?.email}
                className="input mr-1.5"
                disabled
              />
              <button className="btn btn-square btn-ghost">
                <PencilSquareIcon className="size-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="bio">Bio</label>
            <div>
              <textarea
                name="bio"
                id="bio"
                value={user?.bio || ""}
                className="input mr-1.5"
                disabled
              ></textarea>
              <button className="btn btn-square btn-ghost">
                <PencilSquareIcon className="size-4" />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
