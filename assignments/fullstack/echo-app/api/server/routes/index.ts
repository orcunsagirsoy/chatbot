import express from "./express";
import { Container, IInstanceWrapper } from "addict-ioc";
import { Application } from "express";
import { Server } from "http";

function routes(httpServer: Server, app: Application, ioc: Container<IInstanceWrapper<any>>) {
  express(httpServer, app, ioc);
}
export default routes;