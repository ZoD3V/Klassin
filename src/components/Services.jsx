import React from "react";

const Services = () => {
  return (
    <div className="w-full py-4 pb-12 px-4 bg-blue-600">
      <h2 className="text-center text-white font-bold text-2xl my-5 md:text-3xl">
        Our Services
      </h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4 ">
        <div className="w-full shadow-lg hover:scale-105 duration-300 flex flex-col items-center bg-white p-4 my-4 rounded-lg py-4">
          <img className="mx-auto" src="/icons/translate.png" alt="" />
          <p className="text-lg text-center font-medium max-w-[300px]">
            We help you reduce your fees and increase you overral revenue
          </p>
        </div>
        <div className="w-full shadow-lg hover:scale-105 duration-300 flex flex-col items-center bg-white p-4 my-4 rounded-lg py-4">
          <img className="mx-auto" src="/icons/draw.png" alt="" />
          <p className="text-lg text-center font-medium max-w-[300px]">
            We help you reduce your fees and increase you overral revenue
          </p>
        </div>
        <div className="w-full shadow-lg hover:scale-105 duration-300 flex flex-col items-center bg-white p-4 my-4 rounded-lg py-4">
          <img className="mx-auto" src="/icons/math.png" alt="" />
          <p className="text-lg text-center font-medium max-w-[300px]">
            We help you reduce your fees and increase you overral revenue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
