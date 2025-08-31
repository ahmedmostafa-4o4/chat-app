import "@/app/globals.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid place-items-center h-screen">{children}</section>
  );
};

export default AuthLayout;
