const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

  process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });
  

mongodb.initDb((err) => {
  if (err) {
    console.log("\n");
    console.log("*******************************");
    console.log("    Mongo Connection Failed    ");
    console.log("*******************************");
    console.log("\n");
    console.log(err);
  } else {
    app.listen(port);
    console.log("\n");
    console.log("*******************************");
    console.log("✔ Mongo Successfully Connected!");
    console.log("*******************************");
    console.log("\n");
  }
});