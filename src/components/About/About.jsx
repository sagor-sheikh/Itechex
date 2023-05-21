import React from "react";

const About = () => {
  // Call Action
  const phoneNumber = "+7903880-91-85";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <div className="pt-[100px] flex items-center justify-center w-[1920px]">
        <div className="ml-[150px]">
          <img
            className="w-[896px] h-[754px]"
            src="/src/assets/AboutPhoto.png"
            alt="Photos"
          />
        </div>
        <div className="mr-[182px]">
          <div className='flex items-center justify-start h-[120px]  bg-no-repeat bg-start bg-auto bg-[url("/src/assets/About.png")]'>
            <h5 className="font-semibold text-[24px] text-[#563AFF] leading-[31px]">
              Boost Creativity with Reliable Tech Solutions
            </h5>
          </div>
          <div>
            <h2 className="mt-[-30px] font-bold text-[#211F54] text-[57px] leading-[74px]">
              In 38 years, we've <br /> succeeded.{" "}
              <span className="text-[#563AFF]">Success</span> <br /> rewards
              efforts.
            </h2>
            <p className="font-normal text-[18px] leading-[30px] w-[636px] text-[#575B80]">
              itechex ensures that the system operates without hiccups and is
              responsive by <br /> paying attention to even the smallest of
              details. Minified Technology is a novel <br /> approach that
              itechex use for the purpose of safeguarding the database of its{" "}
              <br /> clients and constructing extremely secret firewalls.Learn
              More About Our{" "}
              <span className="text-[#563AFF]"> Success Stories </span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-[30px] bg-[#563AFF]-100 shadow-sm shadow-[#563AFF] w-[196px] h-[97px] rounded-xl border-2 border-[#575B80]-400">
              <h3 className="font-[700] text-[#563AFF] text-[32px] leading-[41px] text-center mt-[5px]">
                23 +
              </h3>
              <p className="text-[18px] text-[#575B80] font-normal leading-[30px] text-center mt-[5px]">
                Years of Experience
              </p>
            </div>
            <div className="mt-[30px] ml-[24px] bg-[#563AFF]-100 shadow-sm shadow-[#563AFF] w-[196px] h-[97px] rounded-xl border-2 border-[#575B80]-400">
              <h3 className="font-[700] text-[#563AFF] text-[32px] leading-[41px] text-center mt-[5px]">
                500
              </h3>
              <p className="text-[18px] text-[#575B80] font-normal leading-[30px] text-center mt-[5px]">
                Complete Projects
              </p>
            </div>
            <div className="mt-[30px] ml-[24px] bg-[#563AFF]-100 shadow-sm shadow-[#563AFF] w-[196px] h-[97px] rounded-xl border-2 border-[#575B80]-400">
              <h3 className="font-[700] text-[#563AFF] text-[32px] leading-[41px] text-center mt-[5px]">
                100+
              </h3>
              <p className="text-[18px] text-[#575B80] font-normal leading-[30px] text-center mt-[5px]">
                Employees
              </p>
            </div>
          </div>
          <div className="mt-[60px] flex items-center justify-start">
            <div>
              <button className="bg-[#563AFF] rounded-[30px] text-[18px] leading-[30px] text-[#FFFFFF] font-[500] w-[178px] h-[60px]">
                Learn more
              </button>
            </div>
            <div className="flex items-center justify-center ml-[35px]">
              <img
                className="cursor-pointer"
                onClick={handleCall}
                src="/src/assets/Call.png"
                alt="Call"
              />
              <p className="ml-[15px] text-[16px] leading-[22px]">
                Call for Help <br />{" "}
                <span className="font-[700] text[25px]">
                  +7 (903) 880-91-85
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next section */}
      <div className="flex items-center justify-center w-[1920px] pt-[180px] pb-[72px]">
        <div className="ml-[406px] flex items-center justify-center">
          <div>
            <div className="w-[306px] h-[233px] mt-[200px] bg-[#7D42FB] rounded-[15px]">
              <div className=" flex items-center justify-center pt-[40px]">
                <img
                  className="w-[60px] h-[60px] mx-auto block"
                  src="/src/assets/idea.png"
                  alt="Idea"
                />
              </div>
              <h5 className="text-white text-center font-[600] text-[24px] leading-[31px] mt-[30px]">
                Experts Problem <br /> Solvers
              </h5>
            </div>
            <div className="w-[306px] h-[233px] mt-[30px]  bg-[#2AAF88] rounded-[15px]">
              <div className=" flex items-center justify-center pt-[40px]">
                <img
                  className="w-[60px] h-[60px] mx-auto block"
                  src="/src/assets/grap.png"
                  alt="Graph"
                />
              </div>
              <h5 className="text-white text-center font-[600] text-[24px] leading-[31px] mt-[30px]">
                Analysis of Creative <br /> Product and Services
              </h5>
            </div>
          </div>
          <div>
            <div className="w-[306px] h-[233px] ml-[30px] bg-[#FF4267] rounded-[15px]">
              <div className=" flex items-center justify-center pt-[40px]">
                <img
                  className="w-[60px] h-[60px] mx-auto block"
                  src="/src/assets/setting.png"
                  alt="Setting"
                />
              </div>
              <h5 className="text-white text-center font-[600] text-[24px] leading-[31px] mt-[30px]">
                Regular Updates & <br /> Bug fixes 3
              </h5>
            </div>
            <div className="w-[306px] h-[233px] mt-[30px] ml-[23px] bg-[#FF813A] rounded-[15px]">
              <div className=" flex items-center justify-center pt-[40px]">
                <img
                  className="w-[60px] h-[60px] mx-auto block"
                  src="/src/assets/help.png"
                  alt="Setting"
                />
              </div>
              <h5 className="text-white text-center font-[600] text-[24px] leading-[31px] mt-[30px]">
                Top-Notch, Real time Customer Service
              </h5>
            </div>
          </div>
        </div>

        <div className="mr-[218px] ml-[24px]">
          <h5 className="font-semibold text-[24px] text-[#563AFF] leading-[31px]">
            What Makes Itechex Stand Out
          </h5>
          <h2 className=" font-bold text-[#211F54] text-[57px] leading-[74px]">
            Digital Technology, IT Solutions, and Service Providers Worldwide
          </h2>
          <p className="font-normal text-[18px] leading-[30px] w-[636px] text-[#575B80]">
            Bring win-win survival techniques to the table in order to assure
            dotted proactive control. At the end of the day, moving ahead, there
            will be a new normal that has developed.
          </p>
          <div className="mt-[70px]">
            <div className="flex justify-between mb-[8px]">
              <p className="text-[#211F54] text-[16px] font-[600]">Analytics</p>
              <p className="text-[#211F54] text-[16px] font-[600]">95%</p>
            </div>
            <div className="bg-[#FFCCD6] h-3 w-full rounded-full">
              <div className="bg-[#FF4267] h-full w-4/5 rounded-full"></div>
            </div>
          </div>
          <div className="mt-[50px]">
            <div className="flex justify-between mb-[8px]">
              <p className="text-[#211F54] text-[16px] font-[600]">Development</p>
              <p className="text-[#211F54] text-[16px] font-[600]">80%</p>
            </div>
            <div className="bg-[#D2C1FC] h-3 w-full rounded-full">
              <div className="bg-[#7D42FB] h-full w-4/5 rounded-full"></div>
            </div>
          </div>
          <div className="mt-[50px]">
            <div className="flex justify-between mb-[8px]">
              <p className="text-[#211F54] text-[16px] font-[600]">Solutions</p>
              <p className="text-[#211F54] text-[16px] font-[600]">85%</p>
            </div>
            <div className="bg-[#C1DDFF] h-3 w-full rounded-full">
              <div className="bg-[#0073FF] h-full w-4/5 rounded-full"></div>
            </div>
          </div>
          <div className="mt-[64px] flex items-center justify-start">
            <div>
              <button className="bg-[#563AFF] rounded-[30px] text-[18px] leading-[30px] text-[#FFFFFF] font-[500] w-[178px] h-[60px]">
                Learn more
              </button>
            </div>
            <div className="flex items-center justify-center ml-[35px]">
              <img
                className="cursor-pointer"
                onClick={handleCall}
                src="/src/assets/Call.png"
                alt="Call"
              />
              <p className="ml-[15px] text-[16px] leading-[22px]">
                Call for Help <br />{" "}
                <span className="font-[700] text[25px]">
                  +7 (903) 880-91-85
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
