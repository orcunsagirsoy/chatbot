### `Mirroring Chatbot`

**INSTALLATION**

- Run Docker Server on your local

- Run Mongo server locally

- Navigate to /echo-app folder which contains docker-compose file

- Run "docker compose build"

- Run "docker compose up"

- App will be running "localhost:3000" listening backend on port 8080

- To stop the container running, run "docker compose down"

  **USAGE**

- Should send Message object as JSON to the API, the API will reflect the message changing sendBy as Bot message.

- interface Message {

        content: string;
        messageType: string;
        messageDate: Date;
        sendBy: string;

  }

- API returns;

  {

        "success": true,
        "payload": {
        "content": "Hello world",
        "messageType": "Text",
        "sendBy": "Client",
        "\_id": "6242c3697f8122276741e7aa",
        "messageDate": "2018-03-29T10:34:00.000Z",
        "\_\_v": 0
        }

  }

- curl --location --request POST 'http://localhost:8080/messages/receive' \
   --header 'Content-Type: application/json' \
   --data-raw '{

        "content": "Hello world",
        "messageType": "Text",
        "messageDate": "2018-03-29T13:34:00.000",
        "sendBy": "Client"

  }'

  **COMPLEXITY ANALYSIS**

- API has constant O(1) time complexity since there is only repo methods, O(n) space complexity since new message object is created on each request.

  **TECH STACK**

- React, Axios, Styled Components

- Typescript

- Node, Express, Mongo

- Docker

- Jest, Mocha
