import Message from "../models/app/message";
import iRepo from "./iRepo";
import MessageModel from "../models/database/message";

export default class MessageRepo extends iRepo<Message> {
  constructor() {
    super();
    this.repo = MessageModel.model;
    this.modelName = MessageModel.modelName;
  }
}
