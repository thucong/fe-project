import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://team-project-be-dev.herokuapp.com/api/products"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
