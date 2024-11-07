"use-client";

import AuthForm from "@/components/forms/AuthForm";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      defaultValues={{ email: "", password: "", name: "", username: "" }}
    />
  );
};
export default SignUp;
