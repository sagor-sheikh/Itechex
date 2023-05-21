import React from "react";
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const MainNav = () => {
  // Search Button handle
  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef(null);

  const handleIconClick = () => {
    setInputVisible(true);
    inputRef.current.focus();
  };

  const handleInputChange = (event) => {
    // Handle search input change here
    console.log('Search term:', event.target.value);
  };

  const handleInputBlur = () => {
    setInputVisible(false);
  };

  return (
    <header className="flex items-center justify-between p-4 w-[1920px] h-[80px]">
      <div className="flex items-center ml-[250px]">
        <img src="/src/assets/logo.png" alt="Logo" className=" w-[171px] h-[46px]" />
      </div>

      <nav className="flex items-center">
        <Link to="/home" className="text-[#211F54] text-[18px] font-[600] ml-[48px]">
          Home
        </Link>
        <Link to="/company" className="text-[#211F54] text-[18px] font-[600] ml-[48px]">
        Company
        </Link>
        <Link to="/itsolutions" className="text-[#211F54] text-[18px] font-[600] ml-[48px]">
        Tt Solutions
        </Link>
        <Link to="/elements" className="text-[#211F54] text-[18px] font-[600] ml-[48px]">
        Elements
        </Link>
        <Link to="/casestudies" className="text-[#211F54] text-[18px] font-[600] ml-[48px]">
        Case Studies
        </Link>
        <Link to="/blog" className="text-[#211F54] text-[18px] font-[600] ml-[48px]">
        Blog
        </Link>
      </nav>
      <div>
      {!isInputVisible && (
        <div onClick={handleIconClick}>
          <img src="/src/assets/Search_btn.png" alt="Search" className="ml-[40px]"/>
        </div>
      )}

      {isInputVisible && (
        <input
          ref={inputRef}
          type="text"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder="Enter search term"
        />
      )}
    </div>
      <button className="mr-[350px] font-[500] text-[18px] py-[15px] px-[30px] bg-[#563AFF] text-white rounded-[30px] hover:bg-green-600">
      Free Quote
      </button>
    </header>
  );
};

export default MainNav;
