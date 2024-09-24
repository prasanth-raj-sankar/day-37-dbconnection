import express from "express";
import cors from "cors";
import { connectbd } from "./db-utils/db-connection.js";
import usersRouter from "./routes/users.js";
import { connectViaMongoose } from "./db-utils/mongoos-connetions.js";

const server = express();

// Middleware used by server to read the body of a request
server.use(express.json());
server.use(cors());

// const middleWareFn = (req, res, next) => {
//   console.log(new Date().toISOString(), req.url, req.method);
//   next();
// };

// server.use(middleWareFn);



// link the studentRouter with express server
server.use("/users", usersRouter);


const PORT = 4500;

// Connect to DB then start the server
// Method 1 promise.then
/* connectToDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server listening on ", PORT);
    });
  })
  .catch((e) => {
    console.log("Error in Connecting to DB", e);
  }); */

// Method Top Level Module await
await connectViaMongoose();
await connectbd(); // this line will wait and connect to DB then next lines will executed

server.listen(PORT, () => {
  console.log("Server listening on ", PORT);
});