const express = require("express");
const app = express();
const connectDB = require("./config/db");
// const path = require("path");n

//connect DB
connectDB();

app.use(express.json({ extended: false }));

app.use("/user", require("./routes/User"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
