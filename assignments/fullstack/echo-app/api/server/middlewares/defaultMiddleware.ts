import { Application } from "express";
import bodyParser from "body-parser";

export default class DefaultMiddleware {
  constructor() {}

  initialize(app: Application) {
    app.use(bodyParser.json())
    app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', "false");
      next();
    });
  }
}