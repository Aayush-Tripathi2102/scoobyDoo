"use client";
import appwriteService from "@/appwrite/config";
import CustomInput from "@/components/CustomInput";
import AnimatedText from "@/components/text";
import React, { useState } from "react";
import { account } from "@/appwrite/config";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const a = await appwriteService.login({ email, password });
    console.log("login completed");
    const user = await account.get();
    if (user) {
      setIsLoggedIn(true);
      window.location.href = "/";
    }
    console.log(user);
  };

  return (
    <>
      <div className="mr-52 mt-20 flex flex-col items-center">
        <AnimatedText text="Sign-in" className="text-4xl" preStyle="text-4xl" />
        <div className="">
          <form
            action=""
            className="mt-5 flex flex-col items-center justify-center gap-5"
            onSubmit={handleSubmit}
          >
            <CustomInput
              input={inputName}
              handleChange={handleNameChange}
              placeholder="Team Name"
            />
            <CustomInput
              input={email}
              type="email"
              handleChange={handleEmailChange}
              placeholder="Email"
            />
            <CustomInput
              input={password}
              type="password"
              handleChange={handlePasswordChange}
              placeholder="Password"
            />
            <button type="submit" className="ml-[430px] mt-10">
              <AnimatedText
                text="Submit"
                className="bg-[#11f800] px-20 py-5 text-xl text-black transition-all"
                preStyle="bg-[#11f800] transition-all text-black  text-xl px-20 py-5"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
