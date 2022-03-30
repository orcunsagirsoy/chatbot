class Constants {
  static PORT = "8080";

  static AllowedOrigins = ["localhost:3000"];

  static ExceptionTypes = {
    PARAMETER_VALIDATION: "PARAMETER_VALIDATION",
    BUSINESS: "BUSINESS"
  };

  static StatusCodes = {
    Success: 200,
    GeneralError: 400
  };

  static SenderType = {
    Bot: "Bot",
    Client: "Client"
  };
}

export default Constants;
