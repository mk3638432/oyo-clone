import connectDb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  connectDb();
  try {
    if (req.method === "GET") {
      const key = req.query.price;
      console.log(key);
      const hotels = await Hotel.find({ price: { $lte: req.query.price } });

      res.status(200).json({ message: "Range Filterd", hotels });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
