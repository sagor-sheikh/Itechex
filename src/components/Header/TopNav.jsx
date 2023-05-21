import React from "react";
import "./top.css";

const TopNav = () => {
  // Gmail Action
  const emailAddress = "example@gmail.com";
  // Call Action
  const phoneNumber = "+7903880-91-85";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  // Action Location
  const locationUrl =
    "https://www.google.com/maps/search/Santa+Ana,+Illinois+85486/@39.6277412,-94.5557037,6z/data=!3m1!4b1";

  // Time Action
  
  return (
    <div className="bg-[#EBE9F9] flex items-center justify-start w-[1920px] h-[50px]">
      <div className=" ml-[250px] mr-[250px]">
        <div className="flex flex-row">
          <div className="flex flex-row pr-5 set-border">
            <a href={`mailto:${emailAddress}`}>
              <img src="/src/assets/Icon.png" alt="email" className="w-[30px] h-[30px]" />
            </a>
            <p className=" ml-[10px] text-[#000000] text-[16px] font-[400]">
              support@gmail.com
            </p>
          </div>
          <div className="flex flex-row ml-5 set-border pr-5">
            <a href="#"><img
              src="/src/assets/Icon1.png"
              onClick={handleCall}
              alt="Phone"
              className="w-[30px] h-[30px]"
            /></a>
            <p className=" ml-[10px] text-[#000000] text-[16px] font-[400]">
              +7 (903) 880-91-85
            </p>
          </div>
          <div className="flex flex-row ml-5">
            <a href={locationUrl} target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/Icon2.png" alt="Location" className="w-[30px] h-[30px]" />
            </a>
            <p className=" ml-[10px] text-[#000000] text-[16px] font-[400]">
              Santa Ana, Illinois 85486
            </p>
          </div>
          <div className="flex flex-row ml-[331px] set-border pr-5">
            <img src="/src/assets/Icon3.png" alt="Time" className="w-[30px] h-[30px]" />
            <p className=" ml-[10px] text-[#000000] text-[16px] font-[400]">
              08:00am-6:00pm
            </p>
          </div>
          <div className="flex flex-row ml-5">
            <a href="#">
              <img src="/src/assets/fb.png" alt="Phone" className="w-[9px] h-[18px]" />
            </a>
            <a href="#" className="mt-[3px]">
              <img
                src="/src/assets/tw.png"
                alt="Phone"
                className="w-[18px] h-[14px] ml-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/insta.png"
                alt="Phone"
                className="w-[18px] h-[18px] ml-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/ineded.png"
                alt="Phone"
                className="w-[16px] h-[16px] ml-[24px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
