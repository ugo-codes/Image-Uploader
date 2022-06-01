import "dotenv/config.js";
import express from "express";
import bodyParser from "body-parser";
import { authenticateApp } from "./authentication/index.js";
import { postFile } from "./express-callback/index.js";
import cors from './cors/index.js'

const app = express();
app.use(cors)

app.use(express.static(`./client/build`))
app.use(bodyParser.urlencoded({ extended: true }));


// handles any post request made to the upload route
app.post("/upload", authenticateApp, postFile);

// Send the web page to the client side
app.get("/", (req, res) => {
  res.sendFile("./client/build/index.html")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
