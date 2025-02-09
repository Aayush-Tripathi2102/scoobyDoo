"use client";
import CustomInput from "@/components/CustomInput";
import LetterAnimation from "@/components/LetterAnimation";
import AnimatedText from "@/components/text";
import React, { useState } from "react";
import { checkCorrect } from "@/utils/checkCorrect";
import appwriteService from "@/appwrite/config";

const Page = () => {
  const questionId = "q5";
  const [input, setInput] = useState("");
    const [correct, setCorrect] = useState(false)

    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);

    if(input === "HOCKEY IS LIFE"){
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
        <AnimatedText text="0x05" preStyle="" />]
      </div>
      <div>
        <LetterAnimation>
          Claws clash with chaos as two legends collide. One heals fast, the
          other talks faster. Follow the mayhem to where Marvel first unveils
          this war—watch closely for the moment a weapon grins back. A mind in
          chaos, new emotions take control. Watch where Pixar opens the door.
          Let time guide you to this world where emotions stir. Pause at the
          same mark when the fiery fear had let out a familiar grin. And there
          you will find a single phrase that awaits being found.
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
