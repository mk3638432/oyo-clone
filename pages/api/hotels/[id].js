import connectDb from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  console.log(req.query);
  console.log(req);

  if (req.method === "GET") {
    connectDb();
    if (req.query.id) {
      const hotel = await Hotel.findById(req.query.id);
      console.log(hotel);
      res.status(200).json({ message: "Good", hotel });
    }
  }
}
