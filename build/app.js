"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(express.json({ limit: "10mb" }));
        this.app.use(express.urlencoded({ extended: false }));
        if (process.env.NODE_ENV !== "production") {
            this.app.use(cors({
                origin: []
            }));
        }
        else {
            this.app.use(cors({
                origin: []
            }));
        }
        this.app.use(express.static("src"));
        this.app.use((req, res, next) => {
            const err = new Error('Not Found');
            next(err);
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map