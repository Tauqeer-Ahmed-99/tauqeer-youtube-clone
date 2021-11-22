import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCHX-ZDo-CuiqfkyCqeBphdWle7hclF7w4",
  },
});

export default request;
