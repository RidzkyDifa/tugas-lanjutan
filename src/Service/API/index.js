import axios from "axios";

export const getData = async () => {
  try {
    const res = await axios.get(
      "https://67454609512ddbd807f76193.mockapi.io/user"
    );
    return res.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const registerUser = async (newUser) => {
  try {
    const res = await axios.post(
      "https://67454609512ddbd807f76193.mockapi.io/user",
      newUser
    );
    return res.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
