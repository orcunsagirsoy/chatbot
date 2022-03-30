import validator from "validator";
import InvalidParametersException from "../exception/invalidParametersException";

export default class BaseRequestValidator {
  validationErrors: string[] = [];
  constructor(private request: any) {}

  finalizeValidate() {
    if (this.validationErrors.length > 0) {
      throw new InvalidParametersException(this.validationErrors.join(","));
    }
  }

  isEmpty(propName: string) {
    if (this.request.body[propName] == undefined || validator.isEmpty(this.request.body[propName])) {
      this.validationErrors.push(propName + " field is empty.");
    }
  }
}
