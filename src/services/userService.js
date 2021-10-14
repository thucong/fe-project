import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://team-project-be-dev.herokuapp.com/api/users",
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2Y2YzZjY3OTk0ZTNhYzM2ZjRjOWEiLCJuYW1lIjoidGVzdGFkbWluMSIsImVtYWlsIjoibWljaGFlbDQyNkBlYXJ0aGxpbmsubmV0IiwicGFzc3dvcmQiOiJ0ZXN0cGFzczEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQxOTIwNTcsImV4cCI6MTYzNDI3ODQ1N30._Ueg4c1b1w9EGTolt4xyV2oWABbr6iObNwMrBhuOsdY",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
