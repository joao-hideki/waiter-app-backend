import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('connected to mongodb');
    config();
    const app = express();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(() => console.log('error connecting to mongo'));

