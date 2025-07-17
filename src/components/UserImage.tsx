import { User } from "@/Types/types";
import Image from "next/image";

const UserImage = ({ user }: { user: User }) => {
  return (
    <div
      className={`avatar ${user?.online ? "avatar-online" : "avatar-offline"}`}
    >
      <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
        <div className="w-12 rounded-full overflow-hidden">
          <Image
            src={user?.image ? user.image : "/images/default-user-image.jpg"}
            width={50}
            height={50}
            alt="User image"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UserImage;
