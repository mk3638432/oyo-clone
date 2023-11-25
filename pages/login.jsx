"use client";
import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const router = useRouter();
  const handleSignUp = async () => {
    const res = await axios.post("/api/user/register", {
      email,
      password,
      name,
    });
    if (res) {
      Cookies.set("token", res.data.token, { expires: 7 });
      console.log(res);
      router.push("/");
    }
  };

  const handleLogIn = async () => {
    setLogin(true);
    const res = await axios.post("/api/user/login", { email, password });
    if (res) {
      Cookies.set("token", res.data.token, { expires: 7 });
      router.push("/");
    }
  };
  const handleToggel = () => {
    setLogin(!login);
  };
  return (
    <>
      <Head>
        <title>OYO - login</title>
      </Head>

      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover ">
        <div className="absolute flex items-center w-full top-10 text-white  px-20 ">
          <h2 className="text-5xl font-bold mr-5 opacity-80 ">OYO</h2>
          <p className="font-bold text-2xl  ">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>

        <div className="flex justify-center items-center w-9/12 ">
          <div className="text-white">
            <p className="font-bold text-5xl  mt-5 text-justify">
              There’s a smarter way to OYO around
            </p>
            <p className="text-2xl ">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="w-10/12 ml-20  pb-40 border bg-slate-50 ">
            <p className="h-10 flex  px-10 text-lg font-bold text-white items-center bg-gradient-to-r from-red-400 to bg-red-700 ">
              {" "}
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-10">
              <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
              <p className="font-bold text-lg mb-1">
                {" "}
                Please enter your phone number to continue
              </p>
              {login ? (
                ""
              ) : (
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="outline-none border border-black my-3 px-3 py-1 w-96 h-10 "
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <input
                type="email"
                placeholder="Enter your email..."
                className="outline-none border border-black my-3 px-3 py-1 w-96 h-10 "
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your password..."
                className="outline-none border border-black my-3 px-3 py-1 w-96 h-10 "
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-96 h-14 text-lg font-bold bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg "
                type="submit"
                onClick={!login ? handleSignUp : handleLogIn}
              >
                {!login ? " Sign Up" : "Login"}
              </button>
              <p className="my-1 text-lg ">
                <span>
                  {" "}
                  {login
                    ? "Dont have an account"
                    : "Already have an account?"}{" "}
                </span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer    "
                  onClick={handleToggel}
                >
                  {login ? "Sing Up" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
