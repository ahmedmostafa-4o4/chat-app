import { usePathname } from "next/navigation";
import MyChats from "./MyChats";
import Nav from "./Nav";
import { usersData } from "@/data/usersData";
import SearchItems from "./SearchItems";

const SideBar = ({
  isSmaller,
  mode,
}: {
  isSmaller: boolean;
  mode: string | null;
}) => {
  const users = usersData();
  const path = usePathname();

  if (mode == "search")
    return (
      <div className={`min-w-xs ${isSmaller ? "w-full" : "w-xl"}`}>
        <ul className="list bg-base-100 rounded-box shadow-md h-screen overflow-y-auto">
          <Nav path={mode} />
          <SearchItems user={users[0]} />
        </ul>
      </div>
    );
  return (
    <div className={`min-w-xs ${isSmaller ? "w-full" : "w-xl"}`}>
      <ul className="list bg-base-100 rounded-box shadow-md h-screen overflow-y-auto">
        <Nav path={path} />
        {users.map((user) => (
          <MyChats key={user?.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
