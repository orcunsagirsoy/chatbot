"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_connect_1 = __importDefault(require("./db_connect"));
var Schema = db_connect_1.default.Schema;
var MODEL_NAME = "message";
var MODEL = new Schema({
    content: { type: String, default: "", required: false },
    messageType: { type: String, default: "", required: false },
    messageDate: { type: Date, default: Date.now, required: false },
    sendBy: { type: String, default: "", required: false }
}, { collection: MODEL_NAME });
exports.default = {
    model: db_connect_1.default.model(MODEL_NAME, MODEL),
    modelName: MODEL_NAME
};
//# sourceMappingURL=message.js.map