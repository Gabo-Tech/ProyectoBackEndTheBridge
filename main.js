
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json())

app.use('/magos',require('./routes/magos'))
app.use('/productos',require('./routes/productos'))
app.use('/categorias',require('./routes/categorias'))

app.use('/pedidos',require('./routes/pedidos'))
app.listen(port, () => console.log("Server running in port " + port));