"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validators_1 = __importDefault(require("./validators"));
var MessageValidator = /** @class */ (function (_super) {
    __extends(MessageValidator, _super);
    function MessageValidator(request) {
        return _super.call(this, request) || this;
    }
    MessageValidator.prototype.validate = function () {
        this.isEmpty("content");
        this.isEmpty("messageType");
        this.isEmpty("sendBy");
        this.isEmpty("messageDate");
        this.finalizeValidate(); //this method should call at the end of the all methods
    };
    return MessageValidator;
}(validators_1.default));
exports.default = MessageValidator;
//# sourceMappingURL=messageValidator.js.map