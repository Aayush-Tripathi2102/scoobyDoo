"use client";
import appwriteService from "@/appwrite/config";
import CustomInput from "@/components/CustomInput";
import LetterAnimation from "@/components/LetterAnimation";
import AnimatedText from "@/components/text";
import { checkCorrect } from "@/utils/checkCorrect";
import React, { useState } from "react";

const Page = () => {
  const questionId = "q1";
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isCorrect = checkCorrect({ questionId, userAnswer: input });

    if(input === "1100111010001100010"){
      setCorrect(true);
    }
    else{
      setCorrect(false)
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
          Deserts, Dynasties, Power and Prophecy- the second act unfolded in
          2024. In this tale where sands hold secrets and the future whispers in
          fragments, a pivotal moment folds back upon itself. Hidden under the
          sand, an important date (ddmmyy) murmurs its truth in reverse. But
          only when seen through the lens of a dual world can its essence be
          fully grasped- think in terms of light and shadow, presence and
          absence.
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
