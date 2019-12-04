const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

const DB ='mongodb+srv://harun:820meYYKaKQujgQm@cluster0-wntnm.mongodb.net/Nirob?retryWrites=true&w=majority';
//connect database
mongoose
  .connect(DB, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB connect successful!'))
  .catch(err => console.log('DB connection failed!'));

//Start the server
const port = process.env.PORT || 7000;
app.listen(port);
