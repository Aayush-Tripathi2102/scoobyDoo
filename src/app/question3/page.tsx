"use client";
import CustomInput from "@/components/CustomInput";
import LetterAnimation from "@/components/LetterAnimation";
import AnimatedText from "@/components/text";
import React, { useState } from "react";
import { checkCorrect } from "@/utils/checkCorrect";
import appwriteService from "@/appwrite/config";

const Page = () => {
  const questionId = "q3";
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);

    const isCorrect = checkCorrect({ questionId, userAnswer: input });
    if (isCorrect) {
      const user = await appwriteService.getCurrentUser();
      if (!user) {
        console.log("answer correct, user not found");
      }
      await appwriteService.updateUserProgress(user!.$id, questionId, 100);
    } else {
      console.log("incorrect, try again");
    }
  };

  return (
    <div>
      <div className="ml-24 mt-10 flex gap-2 text-2xl">
        [
        <AnimatedText text="0x01" preStyle="" />]
      </div>
      <div>
        <LetterAnimation>
          Two big names, one big feud. Multiple callouts, age long fights. One
          song drop- a full stop. The length of those verses holds the key to
          what you seek. Trace its sum to a title buried in the department of a
          tortured poet’s lament. Find the title and use the number once more
          until only one word remains
        </LetterAnimation>
      </div>
      <div>
        <form
          action=""
          className="mx-auto mt-20 flex items-center gap-2"
          onSubmit={handleSubmit}
        >
          <CustomInput
            input={input}
            handleChange={handleChange}
            className="uppercase"
          />
          <button type="submit" className="">
            <AnimatedText
              text="Submit"
              className="bg-[#11f800] px-5 py-5 text-xl text-black transition-all"
              preStyle="bg-[#11f800] transition-all text-black  text-xl px-5 py-5"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
