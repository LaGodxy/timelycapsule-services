import { app } from "./app";
require("dotenv").config();
import { connectToDB } from "./config/db";
import { DB_CONNECTION_STRING } from "./constants";

console.log("DB_CONNECTION_STRING", DB_CONNECTION_STRING);

//Create Server
app.listen(process.env.PORT, async () => {
  await connectToDB(DB_CONNECTION_STRING);
  console.log(`Server is running on port ${process.env.PORT}`);
});
