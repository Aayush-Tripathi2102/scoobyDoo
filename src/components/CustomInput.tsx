'use client';
import React from "react";

interface CustomInputProps {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string|'text'
  placeholder?: string
  className?: string
}

const CustomInput: React.FC<CustomInputProps> = ({ input, handleChange, type, placeholder, className }) => {
  return (
    <input
      type={type}
      value={input}
      onChange={handleChange}
      placeholder={placeholder}
      className={"ml-64 bg-opacity-15 bg-[#11f800] rounded-none border-4 border-[#11f800] text-3xl outline-none focus:ring-0 focus:border-[#11f800] px-4 py-2 "+className}
    />
  );
};

export default CustomInput;
