import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors())

// mongoose.connect(`${DB_URL}`).then(() => {
//   console.log("Database connection established!");
// });
app.use(express.json());

// app.use('/api/v1',CombineRouter)
app.listen(8888, () => {
  console.log("Server is running on port", 8888);
});
