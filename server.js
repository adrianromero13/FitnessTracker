const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const routes = require('./routes');


//set up PORT for server
const PORT = process.env.PORT || 3001;

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//routes used
app.use(routes);

//require('./services/passport');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://adrom:Password1@ds161539.mlab.com:61539/heroku_g9s19wz1';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
