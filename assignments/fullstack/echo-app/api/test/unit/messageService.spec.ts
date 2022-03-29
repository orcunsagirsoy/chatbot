require("dotenv").config();
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const sinon = require("sinon");
import { messageRepo, messageService } from "./calls.spec";
chai.use(require("chai-as-promised"));

describe("Message Service", function () {
  let repoStubs: any = [];
  afterEach(function () {
    let stub;
    while ((stub = repoStubs.pop())) {
      stub.restore();
    }
  });

  describe("receive message function", function () {
    it("should return bot message", async () => {
      // Given
      const botMessage = {
        content: "hello",
        sendBy: "Bot",
        messageDate: new Date(),
        messageType: "Text"
      };
      const clientMessage = {
        content: "hello",
        sendBy: "Client",
        messageDate: new Date(),
        messageType: "Text"
      };
      repoStubs.push(sinon.stub(messageRepo, "create").resolves(botMessage));

      // When
      let result = await messageService.receiveMessage(clientMessage);
      // Then
      expect(result.content).to.eql("hello");
      expect(result.sendBy).to.eql("Bot");
      expect(result.messageType).to.eql("Text");

      sinon.assert.calledOnce(repoStubs[0]);
    });
  });
});
