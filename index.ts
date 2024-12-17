import express, { Express } from "express";
import "dotenv/config";

const app: Express = express();

app.use(express.json());

console.log("aaaaa");

app.listen(process.env.PORT || 4050, () => {
  console.log(
    ` listen to port http://localhost: ${process.env.PORT || 4000} }  `
  );
});
