import MessageRepo from "../../server/repositories/messageRepo";
import MessageService from "../../server/services/messageService";

const messageRepo = new MessageRepo();
const messageService = new MessageService(messageRepo);

export { messageRepo, messageService };
