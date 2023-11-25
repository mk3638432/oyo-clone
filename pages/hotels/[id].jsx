import Image from "next/image";
import React from "react";

const SingleHotel = () => {
  return (
    <div className="w-7/12  mx-auto my-10">
      <Image
        src={
          "https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96"
        }
        alt="hotel"
        width={200}
        height={200}
        className="w-full h-large-box my-5 mx-auto "
      />
      <div className=" ">
        <h3 className="text-3xl font-bold ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas
          ullam laudantium quidem voluptate obcaecati, dolorum inventore alias
          quis doloribus quae officia eius minus rem facilis saepe fugiat? Odit,
          id.{" "}
        </h3>
        <p className="text-xl my-5 text-justify  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          ut. Eligendi sed doloribus ipsum fugiat deleniti esse error quaerat
          tenetur facilis ut aut, omnis tempore cum quam, doloremque velit
          maiores architecto quidem aperiam. Quae sed esse magnam, cumque autem
          mollitia eius nihil facere est voluptate eaque ea officiis deleniti
          qui.
        </p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg  ">
          Price : 4500
        </button>
        <p className="text-3xl font-bold my-5">Facilities :</p>
        <ul className="flex text-xl justify-between ">
          <li>Swimming Pool</li>
          <li>Dogs </li>
          <li>Garden </li>
          <li>Loundry </li>
          <li>Cricket </li>
        </ul>
        <button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg  ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
