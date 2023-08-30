const express = require("express");
const app = express();
const cors = require("cors");
require("./DB/server");
const userRouter = require("./Routes/userRouter");
const recordRouter = require("./Routes/recordRouter")

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter);
app.use('/api', recordRouter)

app.listen(5000, () => {
    console.log("listening port 5000")
})