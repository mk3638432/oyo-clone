import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-90 w-full  mb-6 p-5  ">
      <div className="flex">
        <Image
          src={
            "https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96"
          }
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-large-box mr-3 "
        />
        <div className="grid grid-rows-3  gap-2 ">
          <Image
            src={
              "https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28  mr-3 "
          />
          <Image
            src={
              "https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28  mr-3 "
          />
          <Image
            src={
              "https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28  mr-3 "
          />
          <Image
            src={
              "https://tse1.mm.bing.net/th?id=OIP.4XB8NF1awQyApnQDDmBmQwHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28  mr-3 "
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1  ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          </h2>
          <p className="text-justify my-5 text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            repellendus rerum reiciendis illo officia, soluta quidem id iusto
            necessitatibus sapiente nesciunt, ad natus, quos voluptatibus ullam
            corrupti ab? Similique, nulla.
          </p>
          <p className="text-2xl my-5  ">
            <span className="font-bold">Facilities : </span>
            <span> Free wifi , pet care , swimming pool, Beaches , Resort</span>
          </p>
          <div className="flex  items-center ">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg  ">
              Price : 4500
            </button>
            <Link
              href={"/hotels/2"}
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
