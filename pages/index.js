import React from "react";
import Header1 from "../components/Header1";
import Header2 from "@/components/Header2";
import Banner from "@/components/Banner";
import Image from "next/image";
import Head from "next/head";
import Notify from "@/components/Notify";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India's best Online hotel Booking Site For Sanitized Stay.
        </title>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <Header1 />
      <Header2 />
      <Banner />
      <div className="mx-10">
        <div className=" my-15">
          <Image
            src={"/banner1.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="h-80 w-full "
          />
        </div>
        <div className=" my-15">
          <Image
            src={"/banner2.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="h-40 w-full "
          />
        </div>
        <Notify />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
