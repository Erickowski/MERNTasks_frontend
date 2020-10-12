import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://merntasks-backendserver.herokuapp.com/",
});

export default clienteAxios;
