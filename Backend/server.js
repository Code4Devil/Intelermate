const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const internsRouter = require('./routes/interns');
const foundersRouter = require('./routes/founders');
// chal ja bhai


app.use('/api/founders', foundersRouter);
app.use('/api/interns', internsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});