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
var constants_1 = __importDefault(require("../helpers/constants"));
var BaseException = /** @class */ (function (_super) {
    __extends(BaseException, _super);
    function BaseException(message, status, ex) {
        var _this = 
        // Calling parent constructor of base Error class.
        _super.call(this, message) || this;
        _this.setTraceId = function (traceId) {
            _this.traceId = traceId;
        };
        /**
         * Converting the error to JSON to be returned to Front
         */
        _this.toJson = function () {
            return JSON.stringify({
                code: _this.status,
                exceptionType: _this.type,
                message: _this.message,
                userMessage: _this.userMessage,
                traceId: _this.traceId
            });
        };
        // Saving class name in the property of our custom error as a shortcut.
        _this.name = _this.constructor.name;
        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(_this, _this.constructor);
        // Defining the properties
        _this.status = status || constants_1.default.StatusCodes.GeneralError;
        _this.type = '';
        _this.traceId = '';
        _this.source = '';
        if (ex) {
            if (ex.message && ex.stack) {
                _this.message = ex.message + '\n' + ex.stack;
                _this.source = (ex.stack != undefined && ex.stack.length > 0 ? ex.stack[0] : 'Unknown');
            }
            else {
                _this.message = ex;
            }
        }
        else {
            _this.message = message;
        }
        _this.userMessage = message;
        return _this;
    }
    return BaseException;
}(Error));
exports.default = BaseException;
//# sourceMappingURL=baseException.js.map