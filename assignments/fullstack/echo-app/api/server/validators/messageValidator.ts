import BaseRequestValidator from "./validators";

export default class MessageValidator extends BaseRequestValidator {
  constructor(request: any) {
    super(request);
  }

  validate() {
    this.isEmpty("content");
    this.isEmpty("messageType");
    this.isEmpty("sendBy");
    this.isEmpty("messageDate");
    this.finalizeValidate();
  }
}
