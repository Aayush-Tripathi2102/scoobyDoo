"use client";
import CustomInput from "@/components/CustomInput";
import LetterAnimation from "@/components/LetterAnimation";
import AnimatedText from "@/components/text";
import React, { useState } from "react";
import { checkCorrect } from "@/utils/checkCorrect";
import appwriteService from "@/appwrite/config";

const Page = () => {
  const questionId = "q4";
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
          Where flames ignite and nations unite, the world’s grand stage awaits.
          Seek the city’s grand portrait on the official site—where a tower
          stands tall and a number marks its legacy. Let that number lead you to
          the nation that stood in its place when the world was keeping score.
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
