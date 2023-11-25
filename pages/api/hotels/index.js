import connectDb from "@/db";
import Hotel from "@/models/hotel-model";
import hotel from "@/models/hotel-model";

//     if (req.method === "POST") {
//       const newHotel = new hotel(req.body);
//       const result = await newHotel.save();
//       res.status(200).json({ message: "Hotel added successfully!", result });
//     } else {
//       res.status(405).json({ message: "Method Not Allowed" });
//     }
//   } catch (error) {
//     console.error("Error adding hotel:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      connectDb();
      const hotels = await Hotel.find({ location: req.query.price });

      if (hotels.length > 0) {
        res.status(200).json({ message: "OK", hotels });
      } else {
        const allhotels = await Hotel.find({});
        res.status(200).json({ message: "OK", allhotels });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
