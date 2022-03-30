import axios from "axios";
import MessageType from "../models/message";
import { BASE_URL, CONTENT_TYPE, RECEIVE_MESSAGE_URI } from "./constants";

export async function callWithAxios(message: MessageType | undefined) {
  if (message?.content.length) {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post["Content-Type"] = CONTENT_TYPE;
    return axios.post(RECEIVE_MESSAGE_URI, message);
  }
}

export function clearSpacesInput(input: string) {
  return input.replace(/[\r\n\v]+/g, "").toString();
}
