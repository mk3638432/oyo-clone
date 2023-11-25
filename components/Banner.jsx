"use client";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60 ">
      <div className="mx-10 p-5">
        <h2 className="text-4xl font-bold text-center text-white">
          Over 157,000 hotels and homees across 35 countries
        </h2>
        <div className="grid grid-cols-5 my-5 mx-10">
          <input
            type="text"
            placeholder="Search..."
            name=""
            className=" h-12 outline-none px-3 text-lg  border-r-2 border-gray-400 col-span-2 "
          />
          <input
            type="text"
            placeholder="Search..."
            name=""
            className="h-12 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1 "
          />
          <input
            type="text"
            placeholder="Search..."
            name=""
            className=" h-12 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1 "
          />
          <Link href={"/hotels"}>
            <button
              className="h-12 px-3 p-2 col-span-1 bg-green-400 hover:cursor-pointer text-xl hover:bg-green-600 text-white "
              type="submit"
            >
              Search
            </button>
          </Link>
        </div>
        <div className="flex mx-20 my-5  font-bold ">
          <button
            className="h-12 px-3 p-2  hover:cursor-pointer  mr-5 text-white "
            type="submit"
          >
            Continue your Search
          </button>
          <button
            className="h-12 px-3 p-2 border-2 border-white   hover:cursor-pointer rounded-xl  mr-5 text-white "
            type="submit"
          >
            Home Stay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
