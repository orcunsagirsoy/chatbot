import { Mongoose } from "mongoose";

const mongooseInstance = new Mongoose();

mongooseInstance.connect("mongodb://host.docker.internal:27017/echo_app_db");
export default mongooseInstance;
