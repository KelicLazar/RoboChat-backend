const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const chatRoutes = require("./routes/chat-routes");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/chat", chatRoutes);

app.listen(process.env.PORT || 3000);
