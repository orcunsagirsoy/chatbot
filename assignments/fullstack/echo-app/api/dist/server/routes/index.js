"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("./express"));
function routes(httpServer, app, ioc) {
    (0, express_1.default)(httpServer, app, ioc);
}
exports.default = routes;
//# sourceMappingURL=index.js.map