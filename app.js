const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes');
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`app listening on port http://localhost:${PORT}`)
})