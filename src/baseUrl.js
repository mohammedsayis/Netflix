import axios from "axios"; //axios install and import 
    // what is Axios :=> Axios is an HTTP client library based on promises.
const instance = axios.create({       //copy to axios.instance site
    baseURL: 'https://api.themoviedb.org/3',  //copy baseURL to my api.txt
  });

  export default instance