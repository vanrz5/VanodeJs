const { log } = require('console');
const express = require('express')
const app = express()
const port = 5000;

app.use('/api/goals', require("./routes/goalroutes"))

app.listen(port, () => console.log(`Server berjalan di port ${port}`))