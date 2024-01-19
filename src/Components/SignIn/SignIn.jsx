"use client";
import { signIn, useSession } from "next-auth/react";

const SignIn = () => {
  return (
    <div className={"py-1 px-3 bg-blue-500"} onClick={() => signIn("google")}>
    SignIn 
  </div>
  )
}

export default SignIn