"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongooseInstance = new mongoose_1.Mongoose();
mongooseInstance.connect("mongodb://host.docker.internal:27017/echo_app_db");
exports.default = mongooseInstance;
//# sourceMappingURL=db_connect.js.map