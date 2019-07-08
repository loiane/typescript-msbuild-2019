import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import router from './routes';
import { ENV, Environment, MONGODB_URI, PORT, PUBLIC_DIR } from './util/secrets';

export default class App {
  express: express.Application;

  constructor() {
    this.express = express();

    this.middleWares();
    this.database();
    this.routes();
    this.serveStaticDir();
  }

  start() {
    this.express.listen(PORT, (err: any) => {
      if (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
      }
      // tslint:disable-next-line:no-console
      console.log(`server is listening on ${PORT}`);
    });
  }

  private middleWares() {
    this.express.use(express.json());
  }

  private database() {
    mongoose.set('debug', true);
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  }

  private routes() {
    this.express.use(router);
  }

  private serveStaticDir() {
    if (ENV !== Environment.DEV) {
      this.express.use('/', express.static(PUBLIC_DIR));
      this.express.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/index.html'));
      });
    } else {
      this.express.get('/', (req, res) => {
        res.json({message: 'Hello World!'});
      });
    }
  }
}
