import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import env from 'dotenv';
import postRoutes from '../server/routes/post.js';

const app = express();


app.use(cors());


//Data base connection
const dbURI = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASSWORD}@node-tut.dumhl.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database connected');
  });
app.use(express.json());
app.use('/posts',postRoutes);
app.listen(2000,()=>console.log(`server is running on PORT:`));

