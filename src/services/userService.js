import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://team-project-be-dev.herokuapp.com/api/users",
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZDAzN2JiY2UyYzgwM2ZkMThmMWEiLCJuYW1lIjoidGVzdGFkbWluMSIsImVtYWlsIjoibWljaGFlbDQyNkBlYXJ0aGxpbmsubmV0IiwicGFzc3dvcmQiOiJ0ZXN0cGFzczEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQ1MjIwMTEsImV4cCI6MTYzNDYwODQxMX0.842ZXgtL3YH8xdEDICVP6lWdz7eU9bzZiWD6IwgA7oo",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
