import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/api/products`);
    console.log(process.env.NEXT_PUBLIC_URL_API)
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
