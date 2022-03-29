import { Container, IInstanceWrapper } from "addict-ioc";
import { Application } from "express";
import { Server } from "http";
import Controllers from "../controllers";
import MessagesController from "../controllers/messageController";

export default (httpServer: Server, app: Application, ioc: Container<IInstanceWrapper<any>>) => {
  const MessagesController = ioc.resolve<MessagesController>(Controllers.MessageController);

  app.post("/messages/receive", async (req, res, next) => {
    await MessagesController.receiveMessage(req, res);
  });

  console.log(`Running an Express API server at /messages/*`, "Express routes");
};