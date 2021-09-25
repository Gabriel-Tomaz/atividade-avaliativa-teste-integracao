import axios from "axios";

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
});

export const handleLogin = async data => {
  return new Promise((resolve, reject) => {
    api
    .post("/users/login", data)
    .then((response) => {
      resolve("OK")
    })
    .catch((err) => {
      reject(err);
    });
  })
}
