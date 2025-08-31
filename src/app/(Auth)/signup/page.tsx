import SignupForm from "@/components/Auth/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "...",
};
const SignupPage = () => {
  return <SignupForm />;
};

export default SignupPage;
