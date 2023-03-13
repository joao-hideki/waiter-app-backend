import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import { router } from './router';
import path from 'node:path';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('connected to mongodb');
    config();
    const app = express();
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(() => console.log('error connecting to mongo'));

