import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/api/products`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
