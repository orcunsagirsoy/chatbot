"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var DefaultMiddleware = /** @class */ (function () {
    function DefaultMiddleware() {
    }
    DefaultMiddleware.prototype.initialize = function (app) {
        app.use(body_parser_1.default.json());
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', "false");
            next();
        });
    };
    return DefaultMiddleware;
}());
exports.default = DefaultMiddleware;
//# sourceMappingURL=defaultMiddleware.js.map