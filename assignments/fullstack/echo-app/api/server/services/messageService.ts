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

    botMessage.sendBy = "Bot";
    botMessage.content = result.content;
    botMessage.messageDate = result.messageDate;
    botMessage.messageType = result.messageType;

    return botMessage;
  }
}
