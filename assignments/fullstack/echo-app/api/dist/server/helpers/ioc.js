"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addict_ioc_1 = require("addict-ioc");
var services_1 = __importDefault(require("../services"));
var controllers_1 = __importDefault(require("../controllers"));
var middlewares_1 = __importDefault(require("../middlewares"));
var repositories_1 = __importDefault(require("../repositories"));
var messageController_1 = __importDefault(require("../controllers/messageController"));
var messageService_1 = __importDefault(require("../services/messageService"));
var defaultMiddleware_1 = __importDefault(require("../middlewares/defaultMiddleware"));
var messageRepo_1 = __importDefault(require("../repositories/messageRepo"));
var settings = {
    isSingleton: false,
    isFactory: false
};
var container;
exports.default = (function () {
    if (container)
        return container;
    container = new addict_ioc_1.Container(settings);
    // Registering Repos
    container.register(repositories_1.default.MessageRepo, messageRepo_1.default);
    // Registering Services
    container.register(services_1.default.MessageService, messageService_1.default).dependencies(repositories_1.default.MessageRepo).singleton();
    // Registering Middlewares
    container.register(middlewares_1.default.DefaultMiddleware, defaultMiddleware_1.default).singleton();
    // Registering Controllers
    container.register(controllers_1.default.MessageController, messageController_1.default).dependencies(services_1.default.MessageService).singleton();
    return container;
});
//# sourceMappingURL=ioc.js.map