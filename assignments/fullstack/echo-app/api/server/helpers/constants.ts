class Constants {
  

    static PORT = "8080";
  
    static HttpMethods = {
      GET: "GET",
      HEAD: "HEAD",
      POST: "POST",
      PUT: "PUT",
      PATCH: "PATCH",
      DELETE: "DELETE",
      OPTIONS: "OPTIONS",
      TRACE: "TRACE"
    };
  
    static AllowedOrigins = [
      "localhost:3000"
     
    ];

    static UploadLimit = "20mb";

    static ExceptionTypes = {
      PARAMETER_VALIDATION: 'PARAMETER_VALIDATION',
      BUSINESS: 'BUSINESS',
  }
  
    static StatusCodes = {
      Success: 200,
      GeneralError: 400
    };
  }
  
  export default Constants;
  