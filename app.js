import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "yes",
  });
});

app.get("/users", async (req, res) => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    return res.status(200).json({
      status:true,
      users: users,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error: error,
    });
  }
});

console.log(process.env.PORT);

app.listen(process.env.PORT || 6000, () => {
  console.log(`server is listening on ${process.env.PORT || 6000}`);
});
