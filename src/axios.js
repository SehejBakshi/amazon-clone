import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-ad3c4/us-central1/api' // API (Cloud function) Url
});

export default instance;
