import express from "express";

const app = express();

app.use(express.static('dist'));  // Serve static files from the 'dist' directory


// app.get("/", (req, res) => {
//   res.send("Server is ready to run");
// });

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is a third joke",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "This is a fourth joke",
    },
    {
      id: 5,
      title: "A fivth joke",
      content: "This is a fivth joke",
    },
    {
      id: 6,
      title: "A sixth joke",
      content: "This is a joke",
    },
    {
      id: 7,
      title: "A seventh joke",
      content: "This is a seventh joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

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
