import express, { Express } from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import blogRoutes from './routers/blogRoutes';

const app: Express = express();
const port: Number = 3000;

dotenv.config();

const username = process.env.username;
const password = process.env.password;
const dbURI = `mongodb+srv://${username}:${password}@trynode.mz6oggb.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose.connect(dbURI).then(result => {
  app.listen(port);
});

// setup view engine
app.set('view engine', 'ejs');

// setup static files
app.use(express.static(__dirname + '/public'));

// takes all url encodingdata that comes from the write form
// and pass it that into an object
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.use('/blogs', blogRoutes);
