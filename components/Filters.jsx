"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Filters = ({ setPrice, price, handelPrice, setChecked, checked }) => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get("/api/facilities");
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (error) {}
  };
  const handleCheckBox = (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setChecked(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setChecked(newList);
  };
  useEffect(() => {
    fetchFacilities();
  }, []);
  return (
    <div>
      <div className="border-2 bordeer-red-500 rounded-md m-5 h-auto py-10 px-3  ">
        <label htmlFor="price" className="text-xl mr-3 font-bold">
          Price :
        </label>
        <input
          type="range"
          className="w-[30%]"
          name="price"
          id="price"
          min={500}
          max={3000}
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price}
        />
        <span className="ml-10 w-30 "> &#8377; {price} </span>
        <button
          className="w-40 h-10 bg-green-400 cursor-pointer my-3 "
          onClick={handelPrice}
        >
          Search
        </button>
        <div className="my-10">
          <h3 className="text-xl font-bold ">Filter by Facilities :</h3>
          {list.map((list, index) => (
            <p className="grid grid-cols-4 my-3  ">
              <label htmlFor="checkbox" className="col-span-2">
                {list}{" "}
              </label>
              <input
                type="checkbox"
                name="checkbox"
                value={list}
                onChange={handleCheckBox}
                id="checkbox"
                className="w-5 h-5 cursor-pointer col-span-1 "
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
