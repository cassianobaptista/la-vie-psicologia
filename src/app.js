const express = require("express");
const routes = require("./routes");
const db = require("./database");
const app = express();
const cors = require("cors");
const handleError = require('./middlewares/handleError');

db.hasConection();

app.use(express.json());

app.use(routes);

app.use(cors());

app.use(handleError);

app.listen(3000, () => console.log("Rodando na porta 3000"));

