import express from "express";
import * as http from "http";
import iocContainer from "./ioc";
import routes from "../routes";
import { Application } from "express";
import { Container, IInstanceWrapper } from "addict-ioc";
import Constants from "./constants";
import DefaultMiddleware from "../middlewares/defaultMiddleware";
import Middlewares from "../middlewares";

const app: Application = express();
const httpServer = http.createServer(app);
const ioc: Container<IInstanceWrapper<any>> = iocContainer();
var server: any;
const serverConf = {
  async start({ port = Constants.PORT } = {}) {
 
    initializeDefaultMiddleware();
    // Configure the routes
    routes(httpServer, app, ioc);
    server = httpServer.listen(port);

    return server;
  },

  stop() {
    server.close();
  }
};

export default serverConf;

function initializeDefaultMiddleware() {
  const defaultMiddleware = ioc.resolve<DefaultMiddleware>(Middlewares.DefaultMiddleware);
  defaultMiddleware.initialize(app);
}