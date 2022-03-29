export default interface MessageType {
  content: string;
  messageDate: Date;
  sendBy: string;
  messageType: string;
}

export interface MessageCall {
  data: ResponsePayload;
}

interface ResponsePayload {
  payload: ResponsePayloadContent;
}

interface ResponsePayloadContent {
  content: string;
  messageDate: Date;
  sendBy: string;
  messageType: string;
}
