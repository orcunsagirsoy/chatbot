import Constants from '../helpers/constants';
import BaseException from "./baseException";

class InvalidParametersException extends BaseException {
  exceptionType: string;
  constructor(message?: string) {
    // Providing default message and overriding status code.
    super(message || "Invalid request parameters", Constants.StatusCodes.GeneralError);
    this.exceptionType = Constants.ExceptionTypes.PARAMETER_VALIDATION;
  }
}

export default InvalidParametersException;
