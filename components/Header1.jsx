"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Header1 = () => {
  let auth;

  const router = useRouter();
  const handleLogOut = () => {
    Cookies.remove("token");
    router.push("/");
  };

  useEffect(() => {
    auth = Cookies.get("token");
  }, []);
  return (
    <div className="flex justify-between border-b-4  items-center h-28 px-10">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={100}
        height={100}
        className="w-28 h-28  "
      />
      <div className="  h-full  flex ">
        <Block
          title={"Become a member"}
          para={"Additional 10% off on stays."}
        />
        <Block
          title={"OYO for business "}
          para={"Trusted bt 5000 Corporates ."}
        />
        <Block title={"List your Property"} para={"Start earning in 30 min "} />
        <Block title={"965456367"} para={"Call me book now ."} />
        <div className="flex items-center px-3 ">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={50}
            height={100}
            className="w-10 h-10 rounded-full "
          />
          {auth ? (
            <button onClick={handleLogOut}>
              <h3 className="font-bold cursor-pointer ">LogOut</h3>
            </button>
          ) : (
            <Link href={"/login"}>
              <h3 className="font-bold">Login/SignUp</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
