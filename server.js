const express = require('express');
const mongoose = require('mongoose');
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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness_db', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
