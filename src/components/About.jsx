import React from "react";

const About = () => {
  return (
    <div className="w-full bg-white py-[20px] px-4" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2 text-purple-500 mb-3">
            About Klassin
          </h1>
          <p className="text-base font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normalf
            distribution of letters, as opposed to using 'Content here, content
            here'.
          </p>
        </div>
        <img className="w-[500px] mx-auto my-4" src="/icons/about.png" alt="" />
      </div>
    </div>
  );
};

export default About;
