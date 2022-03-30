import Constants from "../helpers/constants";
import Message from "../models/app/message";
import MessageRepo from "../repositories/messageRepo";

export default class MessageService {
  constructor(private messageRepo: MessageRepo) {}

  async receiveMessage(data: Message) {
    const result = await this.messageRepo.create(data);

    const botMessage: Message = {
      content: "",
      messageType: "",
      messageDate: new Date(),
      sendBy: ""
    };

    botMessage.sendBy = Constants.SenderType.Bot;
    botMessage.content = result.content;
    botMessage.messageDate = result.messageDate;
    botMessage.messageType = result.messageType;

    if (botMessage.content.length) {
      await this.messageRepo.create(botMessage);
      return botMessage;
    }
  }
}
