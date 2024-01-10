"use client";
import axios from "axios";
import React, { Fragment, useState } from "react";
// import { snapsave } from "snapsave-downloader-itj"
// import {ndown} from "nayan-media-downloader"
const Downlo = () => {
  const [value, setValue] = useState("");
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);

  const handleClear = async () => {
    setValue("");
    setItem("");
    console.log("clear...");
  };
  const handlePast = async () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        console.log("Pasted content: ", text);
        setValue(text)
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  const handledown = async () => {
    console.log("hello");
    console.log(value);
    setLoading(true);
    const Data = await axios.post(
      `https://instadownloader-dd22.onrender.com/api/v1/inst`,
      { Id: value }
    );
    console.log(Data?.data);
    setLoading(false);
    setItem(Data?.data);
  };

  return (
    <>
      <div className="max-w-auto  lg:min-w-[60%] md:min-w-[70%] min-w-[85%] h-auto relative  justify-center items-center flex mt-7">
        <input
          type="text"
          placeholder="PASTE URL"
          className="w-[100%] md:py-4 md:px-6 py-3 px-2 focus:scale-110  border-gray-400 border-[2px] rounded-lg backdrop-blur-lg bg-white/50 text-xs"
          onChange={(e) => setValue(e.target.value)}
          value={value} 
        />
        <div className="absolute top-auto flex gap-2 right-2 p-2 md:p-0 backdrop-blur-md bg-white/20 md:bg-transparent rounded-xl">
          <button
            className=" md:py-2 md:px-4 py-1 px-2 border-black border-[1px] rounded-xl hover:bg-white md:text-base text-[8px] "
            onClick={handlePast}
          >
            Paste
          </button>
          {
            value && 
          <button
            type="button"
            className=" md:py-2 md:px-4 py-1 px-2 border-black border-[1px] rounded-xl bg-white md:text-base text-[8px] "
            onClick={() => handleClear()}
          >  
            Clear
          </button> 
          }
        </div>
      </div>

      <button
        type="button" 
        className="py-3 text-xl font-semibold text-white bg-blue-700 rounded-lg px-7 mt-7"
        onClick={handledown}
      >
        {!loading ? "Download" : "Loading..."}
      </button>
       

      <div className="flex flex-col items-center w-[95%] h-auto gap-2 mt-4 md:flex-wrap backdrop-blur-md bg-white/20 md:flex-row md:justify-center p-4 rounded-lg ">
        {item?.data?.map((v, i) => (
          <div key={v.url} className="w-[90%] md:w-[200px]  bg-white rounded-lg flex flex-col justify-center items-center p-1">
            <img  src={v.thumbnail} alt="" className="w-[90%] rounded-lg mt-4" />
            <a href={v.url} > 
              <button
                type="button"
                className="py-3 text-xl font-semibold text-white bg-blue-700 rounded-lg px-7 m-3"
              >
                Download 
              </button>
              </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Downlo;
