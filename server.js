import express from "express";
import users from "./data/users.json" with {type: 'json'};

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
  console.log(`Visit http://localhost:${port} to see the app in action.`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.json(users);
});
