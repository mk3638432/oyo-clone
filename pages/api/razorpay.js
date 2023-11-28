import connectDb from "@/db";
import Hotel from "@/models/hotel-model";
import Razorpay from "razorpay";
import shortid from "shortid";

export default async function handler(req, res) {
  try {
    console.log("RAZORPAY_KEY:", process.env.RAZORPAY_KEY);
    console.log("RAZORPAY_SECRET:", process.env.RAZORPAY_SECRET);

    if (req.method === "POST") {
      connectDb();
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      const hotel = await Hotel.findOne(req.query.id);
      console.log(hotel);
      //  const payment_capture = 1;
      const amount = hotel?.price;

      const options = {
        amount: (amount * 100).toString(),
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture: 1,
      };
      try {
        const result = await razorpay.orders.create(options);
        console.log(result);
        res.status(201).json({
          id: result.id,
          currency: result.currency,
          amount: result.amount,
        });
      } catch (error) {}
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
