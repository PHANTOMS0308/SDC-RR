require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const RatingReviewRouter = require('./RatingReviewRouter.js');
const { connect, disconnect } = require('../model');

// Top-level middlewares
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, './public')));

// Routers
app.use('/reviews', RatingReviewRouter);


// Listen app
const PORT = process.env.PORT || 3000;

(async() => {
  await connect();
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
})();
