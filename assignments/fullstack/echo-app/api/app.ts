require("dotenv").config(); // For loading environment variables from .env file in development mode
import server from "./server/helpers/server"; // server.js includes the creation of Apolo and Express servers
server.start();
