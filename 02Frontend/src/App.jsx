import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });  //yah par useEffect ke andar dependency array nahi hai, isliye ye baar baar chalega
  return (
    <>
      <h1>Chai and fullstack</h1>
      <p>Jokes:{jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}  
    </>
  );
}

export default App;

// 00:03 Don't be afraid of production
// 01:49 Understanding the best practices for backend and frontend development
// 05:27 Setting up the backend
// 07:13 Creating a server with Express
// 10:55 Connecting backend with frontend using Fullstack Proxy and CORS
// 12:50 Setting up backend and frontend connection
// 16:15 Connecting backend with frontend in Fullstack Proxy and CORS
// 18:01 Connect backend with frontend
// 21:36 Introduction to backend and frontend connection
// 23:47 Request a GET from Jio
// 27:08 Cross-origin requests and whitelisting URLs to avoid errors.
// 28:37 Configure whitelisting to allow only specified IPs or domains.
// 31:51 Standardization of backend API
// 33:26 Proxies are used to standardize and simplify URL requests.
// 36:45 Configure server to automatically append '/api' to requests
// 38:34 Proxy allows the server to know the origin of the request
// 41:46 Proxy is a solution to handle errors related to CORS.
// 43:20 Connect backend with frontend using Fullstack Proxy and CORS
// 46:41 Issue with propagating frontend changes in the backend
// 48:57 Connecting backend with frontend using proxy