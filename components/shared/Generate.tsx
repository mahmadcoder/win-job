"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const Generate: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-4 bottom mt-4 mr-9">
      <button
        className="flex bg-[#41B362] text-white px-4 py-2 rounded-lg mb-0"
        onClick={toggleAccordion}
      >
        Generate
        <span
          className={`ml-2 transition-transform transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown />
        </span>
      </button>
      {isOpen && (
        <div className="bg-[#8080804D]/30 rounded-lg h-14">
          <button className="block w-full hover:underline ">CV</button>
          <button className="block w-full hover:underline">Cover Letter</button>
        </div>
      )}
    </div>
  );
};

export default Generate;
