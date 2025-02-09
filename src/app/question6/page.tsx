"use client";
import CustomInput from "@/components/CustomInput";
import LetterAnimation from "@/components/LetterAnimation";
import AnimatedText from "@/components/text";
import React, { useState } from "react";
import { checkCorrect } from "@/utils/checkCorrect";
import appwriteService from "@/appwrite/config";

const Page = () => {
  const questionId = "q6";
  const [input, setInput] = useState("");
    const [correct, setCorrect] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);

    if(input === "290624"){
      setCorrect(true);
    }
    else{
      setCorrect(false)
    }

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
        <AnimatedText text="0x06" preStyle="" />]
      </div>
      <div>
        <LetterAnimation>
          Start your quest where the pixels meet—the Instagram page holds the
          first key! Follow the trail of moments captured, where words hold more
          than they seem. Legends were made where these numbers point. Find the
          ground, recall the glory—history holds your next clue. Numbers lead
          the way, and with it, the date (ddmmyy) seals your fate.
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
          {correct ? (
            <p>Correct Answer</p>
          ):<>{correct}</>}
        </form>
      </div>
    </div>
  );
};

export default Page;
