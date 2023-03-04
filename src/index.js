const express = require('express')
const app = express()
const port = process.env.PORT || 9999

// require("./db/mongoose");
const sentimentRoute = require("./routes/sentiments");

// const taskRouter = require("./routers/task");
require('dotenv').config()
// const app = express();
// const port = 9999;


app.use(express.json());
app.use(sentimentRoute);

app.listen(port, () => {
    console.log("Server is up on port " + port);
});
