"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.PORT = "8080";
    Constants.HttpMethods = {
        GET: "GET",
        HEAD: "HEAD",
        POST: "POST",
        PUT: "PUT",
        PATCH: "PATCH",
        DELETE: "DELETE",
        OPTIONS: "OPTIONS",
        TRACE: "TRACE"
    };
    Constants.AllowedOrigins = [
        "localhost:3000"
    ];
    Constants.UploadLimit = "20mb";
    Constants.ExceptionTypes = {
        PARAMETER_VALIDATION: 'PARAMETER_VALIDATION',
        BUSINESS: 'BUSINESS',
    };
    Constants.StatusCodes = {
        Success: 200,
        GeneralError: 400
    };
    return Constants;
}());
exports.default = Constants;
//# sourceMappingURL=constants.js.map