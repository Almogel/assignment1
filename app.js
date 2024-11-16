const express = require("express");
const app = express() ;
const dotenv = require ("dotenv").config();

const port = process.env.PORT;

const postRoutes = require("./Routes/posts_routes");
app.use("/posts", postRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

