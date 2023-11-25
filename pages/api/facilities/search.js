import connectDb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  connectDb();
  try {
    if (req.method === "GET") {
      const key = req.query.val;
      console.log(key);
      const hotels = await Hotel.find({ "facilities.name": { $in: key } });

      res.status(200).json({ message: "OK", hotels });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
