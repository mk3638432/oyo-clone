"use client";
import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import React, { useEffect, useState } from "react";

const hotels = ({ hotels }) => {
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(3000);
  const [checked, setChecked] = useState([]);

  const handleCheckList = async () => {
    const { data } = await axios.get(`/api/facilities/search?val=${checked}`);
    if (data?.hotels) {
      let newArr = data.hotels;
      setChecked(newArr);
    }
  };
  console.log(checked);
  useEffect(() => {
    handleCheckList();
  }, []);
  const handelPrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    if (data?.hotels) {
      setList(data.hotels);
    }
  };
  return (
    <>
      <div>
        <Header1 />
        <div className="grid grid-cols-12 ">
          <div className="col-span-3">
            <Filters
              setPrice={setPrice}
              price={price}
              handelPrice={handelPrice}
              setChecked={setChecked}
              checked={checked}
            />
          </div>
          <div className="col-span-9 ">
            {list.length > 0
              ? list.map((e, index) => (
                  <div className="m-5" key={index}>
                    <Hotel data={e} />
                  </div>
                ))
              : Array.isArray(hotels)
              ? hotels.map((data, index) => (
                  <div className="m-5" key={index}>
                    <Hotel data={data} />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/hotels?price=${ctx.query.price}`
    );

    if (!res.ok) {
      throw new Error(`API request failed with status: ${res.status}`);
    }

    const data = await res.json();

    return {
      props: {
        hotels: data.allhotels || data.hotels || null,
      },
    };
  } catch (error) {
    console.error("Error fetching hotels:", error);

    return {
      props: {
        hotels: null,
      },
    };
  }
}

export default hotels;
