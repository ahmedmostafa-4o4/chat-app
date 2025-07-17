import MyChats from "./MyChats";
import Nav from "./Nav";
import { usersData } from "@/data/usersData";

const SideBar = ({ isSmaller }: { isSmaller: boolean }) => {
  const users = usersData();
  return (
    <div className={`min-w-xs ${isSmaller ? "w-full" : "w-xl"}`}>
      <ul className="list bg-base-100 rounded-box shadow-md h-screen overflow-y-scroll overflow-x-hidden">
        <Nav />
        {users.map((user) => (
          <MyChats key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
