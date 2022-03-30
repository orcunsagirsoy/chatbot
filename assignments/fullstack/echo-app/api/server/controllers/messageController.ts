import Constants from "../helpers/constants";
import MessageService from "../services/messageService";
import MessageValidator from "../validators/messageValidator";

class MessageController {
  constructor(private messageService: MessageService) {
    this.messageService = messageService;
  }

  async receiveMessage(req: any, res: any) {
    new MessageValidator(req).validate();
    const result = await this.messageService.receiveMessage(req.body);
    return res.status(Constants.StatusCodes.Success).send({ success: true, payload: result });
  }
}

export default MessageController;
