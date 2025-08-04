"use client";
import React, { useState } from "react";

const BoxFilter: React.FC = () => {
  const options = [
    "پربازدید ترین مقالات",
    "قدیمی ترین مقالات",
    "جدید ترین مقالات",
  ];
  const items = ["گزینه اول", "گزینه دوم", "گزینه سوم"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="container  border-black border-2 p-10 flex items-center justify-around mb-32">
      <div className="flex gap-12 justify-center items-center text-gray-700">
        {options.map((option, index) => (
          <span key={index} className="cursor-pointer">
            {option}
          </span>
        ))}
      </div>
      <div>
        <button
          className="border-2 border-black p-3 flex flex-row-reverse gap-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9995 16.8C11.2995 16.8 10.5995 16.53 10.0695 16L3.54953 9.48001C3.25953 9.19001 3.25953 8.71001 3.54953 8.42001C3.83953 8.13001 4.31953 8.13001 4.60953 8.42001L11.1295 14.94C11.6095 15.42 12.3895 15.42 12.8695 14.94L19.3895 8.42001C19.6795 8.13001 20.1595 8.13001 20.4495 8.42001C20.7395 8.71001 20.7395 9.19001 20.4495 9.48001L13.9295 16C13.3995 16.53 12.6995 16.8 11.9995 16.8Z"
              fill="black"
            />
          </svg>
          پایتون
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BoxFilter;
