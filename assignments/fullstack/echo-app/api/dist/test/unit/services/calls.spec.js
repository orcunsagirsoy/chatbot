"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageService = exports.messageRepo = void 0;
var messageRepo_1 = __importDefault(require("../../../server/repositories/messageRepo"));
var messageService_1 = __importDefault(require("../../../server/services/messageService"));
var messageRepo = new messageRepo_1.default();
exports.messageRepo = messageRepo;
var messageService = new messageService_1.default(messageRepo);
exports.messageService = messageService;
//# sourceMappingURL=calls.spec.js.map