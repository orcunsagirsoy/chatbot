import { Container, IInstanceWrapper } from "addict-ioc";
import Services from "../services";
import Controllers from "../controllers";
import Middlewares from "../middlewares";
import Repos from "../repositories";
import MessageController from "../controllers/messageController";
import MessageService from "../services/messageService";
import DefaultMiddleware from "../middlewares/defaultMiddleware";
import MessageRepo from "../repositories/messageRepo";

const settings = {
  isSingleton: false,
  isFactory: false
};
var container: Container<IInstanceWrapper<any>>;
export default () => {
  if (container) return container;

  container = new Container(settings);

  // Registering Repos
  container.register(Repos.MessageRepo, MessageRepo);

  // Registering Services
  container.register(Services.MessageService, MessageService).dependencies(Repos.MessageRepo).singleton();

  // Registering Middlewares
  container.register(Middlewares.DefaultMiddleware, DefaultMiddleware).singleton();

  // Registering Controllers
  container.register(Controllers.MessageController, MessageController).dependencies(Services.MessageService).singleton();

  return container;
};
