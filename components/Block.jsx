import Image from "next/image";
import React from "react";

const Block = ({ title, para }) => {
  return (
    <div className="w-60 h-full flex   border-r border-gray-300 px-3 items-center ">
      <Image
        src={"/demo.svg"}
        alt="demo"
        width={50}
        height={100}
        className="w-10 h-10 rounded-full "
      />

      <div>
        <h3 className="font-bold ">{title}</h3>
        <p className="text-gray-400  text-sm line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Block;
