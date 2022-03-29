import mongoose from "./db_connect";
import { Document } from "mongoose";
import Message from "../app/message";
var Schema = mongoose.Schema;

const MODEL_NAME = "message";
var MODEL = new Schema<Document<Message>>(
  {
    content: { type: String, default: "", required: false },
    messageType: { type: String, default: "", required: false },
    messageDate: { type: Date, default: Date.now, required: false },
    sendBy: { type: String, default: "", required: false }
  },
  { collection: MODEL_NAME }
);

export default {
  model: mongoose.model(MODEL_NAME, MODEL),
  modelName: MODEL_NAME
};
