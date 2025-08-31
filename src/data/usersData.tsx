export const usersData = (): import("@/Types/types").User[] => [
  {
    id: "1",
    name: "Ahmed Mostafa",
    image: "/images/my-photo.jpg",
    online: true,
  },
  {
    id: "2",
    name: "Ali Sarhan",
    image: null,
    online: true,
  },
  {
    id: "3",
    name: "Amr Soliman",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    online: true,
  },
  {
    id: "4",
    name: "Ahmed Abdelkreem",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    online: false,
  },
];

export const authUser = (): import("@/Types/types").User => {
  return {
    id: "1",
    email: "ahmedmostafa@gmail.com",
    name: "Ahmed Mostafa",
    image: "/images/my-photo.jpg",
    online: true,
  };
};
