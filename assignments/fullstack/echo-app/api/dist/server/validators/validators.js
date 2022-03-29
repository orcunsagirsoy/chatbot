"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("validator"));
var invalidParametersException_1 = __importDefault(require("../exception/invalidParametersException"));
var BaseRequestValidator = /** @class */ (function () {
    function BaseRequestValidator(request) {
        this.request = request;
        this.validationErrors = [];
    }
    BaseRequestValidator.prototype.finalizeValidate = function () {
        if (this.validationErrors.length > 0) {
            throw new invalidParametersException_1.default(this.validationErrors.join(","));
        }
    };
    BaseRequestValidator.prototype.isEmpty = function (propName) {
        if (this.request.body[propName] == undefined || validator_1.default.isEmpty(this.request.body[propName])) {
            this.validationErrors.push(propName + " field is empty.");
        }
    };
    return BaseRequestValidator;
}());
exports.default = BaseRequestValidator;
//# sourceMappingURL=validators.js.map