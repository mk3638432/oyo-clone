import axios from "axios";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const Payment = () => {
  const params = useRouter();
  const makePayment = async () => {
    const val = {
      id: params?.id,
    };
    const { data } = await axios.post("/api/razorpay", val);

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: "Manoj",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank you",
      handler: function (responce) {},
      prefill: {
        name: "Manoj",
        email: "mk3638432@gmail.com",
        contact: 8668382744,
      },
    };
    const payment = new window.Razorpay(options);
    payment.open();
  };
  useEffect(() => {
    makePayment();
  }, []);
  return (
    <>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payment;
