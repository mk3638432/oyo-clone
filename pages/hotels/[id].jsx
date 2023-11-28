"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const SingleHotel = ({ hotel }) => {
  // let auth;
  // console.log(Cookies.get("token"));
  // if (typeof window !== "undefined") {
  //   auth = Cookies.get("token");
  // }
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get("token");
    if (cookie) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, []);
  return (
    <>
      <Head>
        <title> {hotel?.name} </title>
      </Head>
      <div className="w-7/12  mx-auto my-10">
        <Image
          src={hotel?.banner}
          alt="hotel"
          width={200}
          height={200}
          className="w-full h-large-box my-5 mx-auto "
        />
        <div className=" ">
          <h3 className="text-3xl font-bold ">{hotel?.name}</h3>
          <p className="text-xl my-5 text-justify  ">{hotel?.description}</p>
          <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg  ">
            Price : &#8377; {hotel?.price}
          </button>
          <p className="text-3xl font-bold my-5">Facilities :</p>
          <ul className="flex text-xl  ">
            {hotel?.facilities?.map((data) => (
              <li className="mr-5 mb-3 flex items-center gap-1">
                {" "}
                <span>
                  {" "}
                  <Image
                    src={data?.img}
                    width={200}
                    alt="data"
                    height={200}
                    className="w-8 h-8 rounded-full "
                  />{" "}
                </span>
                <span className="ml-5"> {data?.name} </span>{" "}
              </li>
            ))}
          </ul>
          {true ? (
            <Link href={`/payment/${hotel?._id}`}>
              <button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg  ">
                Book Now
              </button>
            </Link>
          ) : (
            <span className="text-2xl">
              {" "}
              Please{" "}
              <Link className="text-red-500" href={"/login"}>
                {" "}
                Login{" "}
              </Link>{" "}
              to get offers{" "}
            </span>
          )}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const res = await fetch(`http://localhost:3000/api/hotels/${ctx.query.id}`);
  console.log(res);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;
