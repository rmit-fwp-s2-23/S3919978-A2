const express = require('express')
const cors = require("cors");
const db = require('./src/database');

// Database will be sync'ed in the background.
db.sync();

const app = express()

// Parse requests of content-type - application/json.
app.use(express.json());

// Add CORS suport.
app.use(cors());

// Simple Hello World route.
app.get('/', (req, res) => {
  res.json({ message: "Hello World!" });
})

// Add customized routes.
require("./src/routes/user.routes.js")(express, app);
require("./src/routes/movie.routes.js")(express, app);
require("./src/routes/cinema.routes.js")(express, app);
require("./src/routes/schedule.routes.js")(express, app);
require("./src/routes/review.routes.js")(express, app);
require("./src/routes/ticket.routes.js")(express, app);


const port = 5000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})