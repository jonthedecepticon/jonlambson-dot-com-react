const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();

// Routes
require('./routes/authRoutes')(app);

app.listen(PORT)
