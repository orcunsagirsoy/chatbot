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
var baseException_1 = __importDefault(require("./baseException"));
var InvalidParametersException = /** @class */ (function (_super) {
    __extends(InvalidParametersException, _super);
    function InvalidParametersException(message) {
        var _this = 
        // Providing default message and overriding status code.
        _super.call(this, message || "Invalid request parameters", constants_1.default.StatusCodes.GeneralError) || this;
        _this.exceptionType = constants_1.default.ExceptionTypes.PARAMETER_VALIDATION;
        return _this;
    }
    return InvalidParametersException;
}(baseException_1.default));
exports.default = InvalidParametersException;
//# sourceMappingURL=invalidParametersException.js.map