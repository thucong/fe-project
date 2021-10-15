import axios from "axios";

export const getLabels = async () => {
  try {
    const response = await axios.get(
      "https://team-project-be-dev.herokuapp.com/api/labels"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
