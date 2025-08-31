import LoginForm from "@/components/Auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "...",
};
const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
