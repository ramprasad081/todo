// // import express, { response } from 'express';
// import express from "express";
// // import { request } from 'node:http';
// import dotenv from "dotenv";
// import dbConnect from './config/dbConnect.js';
// import Users from "./schema/Users.js";
// import Tasks from "./schema/Tasks.js";



// dotenv.config();
// dbConnect();

// const app = express();
// const port = 3000;




// app.use(express.json());
// // app.use(express.json());
// // app.use(express.static("public"));

// app.use(express.json());


// app.post("/users", async (req, res) => {
//   try {
//     const user = await Users.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/tasks", async (req, res) => {
//   try {
//     const task = await Tasks.create(req.body);
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });


// app.post("/login", (req, res) => {
//   const body = req.body;
//   res.send(JSON.stringify(body));
// });


// app.get('/products', (req, res) => {
//   const { limit, skip } = req.query;
//   if (limit || skip) {
//     res.send(`Hitting product api with query limit:${limit || 0} & skip: ${skip || 0}`)
//   }
//   res.send('products');
// });


// app.get("/user/:userId/order/:orderId/status", (req, res) => {
//   const { userId, orderId } = req.params;

//   res.send(`User: ${userId}, Order: ${orderId}`);
// });

// // app.get("/products/:id/details", (req, res) => {
// //     const id = req.params.id;
// //     res.send(` product id : ${id}`)
// // })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });



//xxxxxxxxxxxxxxxxxxxxxxxxxx

// import express from "express";
// import dotenv from "dotenv";
// import dbConnect from "./config/dbConnect.js";
// import Users from "./schema/Users.js";

// dotenv.config();
// dbConnect();

// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/users", async (req, res) => {
//   const user = await Users.create(req.body);
//   res.json(user);
// });

// app.get("/products", (req, res) => {
//   res.send("products");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


//xxxxxxxxxxxxxxxxxxxxx

import express from "express";
import dbConnect from "./config/dbConfig.js";
// import usersRoute from "./routers/users.route.js";
// import tasksRoute from "./routers/tasks.route.js";
import usersRoute from "./routes/users.route.js";
import tasksRoute from "./routes/tasks.route.js";
import dotenv from "dotenv";

import * as path from "path";
const rootpath = process.cwd();
dotenv.config();

dbConnect();

const app = express()
const port = 5000

app.use(express.json());
app.use(express.static("public"));

app.get("/{any}", () => {
  res.sendfile(path.join(rootpath,"public","index.html"));
})

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/users", usersRoute);
app.use("/tasks", tasksRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
