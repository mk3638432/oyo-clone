import connectDb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  connectDb();
  try {
    if (req.method === "GET") {
      const facilities = await Hotel.find({}).distinct("facilities.name");

      res.status(200).json({ message: "OK", facilities });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
