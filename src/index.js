const express = require('express')
const app = express()
const port = process.env.PORT || 9999

// require("./db/mongoose");
const sentimentRoute = require("./routes/sentiments");
const summeryRoute = require("./routes/summery")

require('dotenv').config()

app.use(express.json());
app.use(sentimentRoute);
app.use(summeryRoute)

app.listen(port, () => {
    console.log("Server is up on port " + port);
});
