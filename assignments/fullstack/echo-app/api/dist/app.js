"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config(); // For loading environment variables from .env file in development mode
var server_1 = __importDefault(require("./server/helpers/server")); // server.js includes the creation of Apolo and Express servers
server_1.default.start();
//# sourceMappingURL=app.js.map