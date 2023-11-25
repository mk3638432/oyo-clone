import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import React from "react";

const hotels = ({ hotels }) => {
  console.log(hotels);
  return (
    <>
      <div>
        <Header1 />
        {Array.isArray(hotels) ? (
          hotels.map((data, index) => (
            <div className="m-5" key={index}>
              <Hotel data={data} />
            </div>
          ))
        ) : (
          <p>No hotels available</p>
        )}
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
