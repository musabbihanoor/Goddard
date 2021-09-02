import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

// Load User
export const loadUser = async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:5000/user/");
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

// register user
export const register = async ({ name, email, password, phone }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, phone });
  try {
    const res = await axios.post("/api/users", body, config);
    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      console.log(errors);
    }
  }
};

//Login user
export const login = async (email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  console.log("logging in");
  try {
    const res = await axios.post(
      "http://localhost:5000/user/login/",
      body,
      config
    );
    const token = res.data.token;
    localStorage.setItem("token", token);
    loadUser();
    console.log(token);
  } catch (err) {
    console.log(err);
  }
};
