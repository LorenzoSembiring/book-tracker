const express = require('express');
const userRoute = require('./src/route/userRoute');
const route = require('./src/route/index');
require('dotenv').config();
var cors = require('cors')
const app = express();
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use('/api/', route)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})