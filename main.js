
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json())

app.use('/magos',require('./routes/users'))
app.use('/escobas',require('./routes/posts'))

app.listen(port, () => console.log("Server running in port " + port));