import * as express from "express";
import * as cors from "cors";
const dotenv = require('dotenv');

dotenv.config();

class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config() {
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: false }));
    if (process.env.NODE_ENV !== "production") {
      this.app.use(cors({
        origin: [
          '*'
        ]
      }));
    } else {
      this.app.use(cors({
        origin: [
          '*'
        ]
      }));
    }
    this.app.use(express.static("src"));
    this.app.use((req, res, next) => {
      const err = new Error('Not Found')
      next(err)
    })
  }

}

export default new App().app;