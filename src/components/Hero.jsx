import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[110px]">
      <div className="flex flex-col h-full items-center container mx-auto px-4">
        <div className="flex md:gap-10 flex-wrap items-center justify-center w-full">
          <h2 className="font-bold text-purple-500 md:text-3xl lg:max-w-[250px] text-2xl text-center">
            "Easy learning only in Klassin"
          </h2>
          <img className="w-[300px] h-[300px]" src="/icons/math.png" alt="" />
        </div>
        <p className="text-lg mb-2 text-center">
          Assessment and direction and exercises that motivate students to
          master the lesson
        </p>
        <div className="p-3 px-10 cursor-pointer rounded bg-gray-100 mt-5 text-purple-500 shadow-md font-bold">
          SCHOOL LIST
        </div>
        <div className="flex gap-2 my-7 text-center">
          <span className="text-purple-500 text-lg">✓</span>
          <p className="font-bold flex gap-2">
            Trusted by more than 50 million users worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
