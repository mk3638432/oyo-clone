import React from "react";

const Header2 = () => {
  const List = [
    {
      name: "Bangalore",
    },
    {
      name: "Chennai",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Andra",
    },
    {
      name: "Kochi",
    },
  ];
  return (
    <div>
      <div className="flex  px-10 bg-gray-400 justify-between ">
        {List.map((list, i) => (
          <p key={i}> {list?.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Header2;
