"use client";
import Image from "next/image";
import React from "react";

const Notify = () => {
  return (
    <div className="flex my-14 border-2 justify-between items-center rounded-lg border-gray-500 px-5   ">
      <div className="flex items-center ">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-5 "
        />
        <div className="text-xl">
          <p className="font-bold"> Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox </p>
        </div>
      </div>
      <div className="flex">
        <input
          type="email"
          className="px-4 py-2 outline-none rounded-lg mr-5 border w-80 h-14 border-gray-300  "
          placeholder="e.g./john@email.com"
        />
        <button
          type="submit"
          className="w-36 h-14 bg-red-500 text-xl text-white rounded-lg cursor-pointer "
        >
          {" "}
          Notify{" "}
        </button>
      </div>
    </div>
  );
};

export default Notify;
