"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = ({ data }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-90 w-full  mb-6 p-5  ">
      <div className="flex">
        <Image
          src={data?.banner}
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-large-box mr-3 "
        />
        <div className="flex flex-col justify-between">
          {data &&
            data.gallery.map((data, index) => (
              <Image
                key={index}
                src={data}
                alt="hotel"
                width={200}
                height={200}
                className="w-28  h-14 mr-3 "
              />
            ))}
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1  "> {data?.name}</h2>
          <p className="text-justify my-5 text-lg ">{data?.description}</p>
          <div className="text-2xl my-5  ">
            <span className="font-bold">Facilities : </span>
            <ul className="flex ">
              {data &&
                data?.facilities.map((list, i) => (
                  <li className="mr-5 mb-3 flex items-center gap-1">
                    {" "}
                    <span>
                      {" "}
                      <Image
                        src={list?.img}
                        width={200}
                        height={200}
                        className="w-8 h-8 rounded-full "
                      />{" "}
                    </span>
                    <span className="ml-5"> {list?.name} </span>{" "}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex  items-center ">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg  ">
              Price : &#8377; {data?.price}
            </button>
            <Link
              href={`/hotels/${data?._id}`}
              className="text-xl font-bold text-red-500 ml-10  "
            >
              {" "}
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
