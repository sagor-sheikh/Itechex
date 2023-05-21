import React from "react";
import backgroundImage from "../../assets/HeroBg.png";

const Hero = () => {
  return (
    <>
      <div className="relative w-[1920px] h-[850px]">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#19104E] to-[#19104E]"
          style={{
            mixBlendMode: "multiply",
          }}
        >
          {" "}
        </div>
        <div
          className="relative bg-no-repeat bg-cover bg-center h-[850px] opacity-25"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between opacity-1 ">
          <div className="text-white text-start ml-[200px]">
            <h4 className="text-[#00D998] text-[32px] font-[600] leading-[42px]">
              Great IT field experience
            </h4>
            <h1 className="font-[700] text-[70px] leading-[99px]">
              Innovative IT solutions <br /> br to help your business
            </h1>
            <p className="font-[400] text-[24px]">
              Our Number One Goal Is to Become the Most Reputable Worldwide{" "}
              <br /> Provider of IT Solutions
            </p>
            <div className="flex items-center">
              <button className="flex items-center px-4 py-2 text-white border-2 rounded-full border-[#ffff]">
              <p className="text-[24px]">Let's Talk Now</p>
                <img className=" ml-[18px] w-[40px] h-[40px]" src="/src/assets/headphone.png" alt="" />
                
              </button>

              <button className="flex items-center ml-4 px-4 py-2 text-white">
                <img className="w-[70px] h-[70px]" src="/src/assets/play.png" alt="" />
                <p className="text-[18px] ml-[15px]">How we work</p>
              </button>
            </div>
          </div>
          <div className='text-end'>
            <img className="mr-[150px] w-[700px] h-[870]" src="/src/assets/Photo1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
