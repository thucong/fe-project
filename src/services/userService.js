import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://team-project-be-dev.herokuapp.com/api/users",
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU2ZDAzN2JiY2UyYzgwM2ZkMThmMWEiLCJuYW1lIjoidGVzdGFkbWluMSIsImVtYWlsIjoibWljaGFlbDQyNkBlYXJ0aGxpbmsubmV0IiwicGFzc3dvcmQiOiJ0ZXN0cGFzczEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQ2MDk2NjcsImV4cCI6MTYzNDY5NjA2N30.zR_Vy_albUmKkq-TsJSi21BpCmh-kugPf7-qCuLYspA",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
