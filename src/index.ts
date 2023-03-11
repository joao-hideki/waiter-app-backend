import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('connected to mongodb');
    config();
    const app = express();
    app.use(express.json());
    app.use(router);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(() => console.log('error connecting to mongo'));

