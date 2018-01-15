const express = require('express');
const PORT = process.env.PORT || 3000;
require('./services/passport');

const app = express();

// Routes
require('./routes/authRoutes')(app);

app.listen(PORT)
