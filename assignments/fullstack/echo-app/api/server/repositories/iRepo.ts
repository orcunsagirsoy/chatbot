import { Model, Document } from "mongoose";

export default class iRepo<T> {
  repo: Model<Document<T>> | undefined;
  modelName: string | undefined;

  constructor() {
    this.repo = undefined;
    this.modelName = undefined;
  }
  /**
   * Creating an entity inside the database
   * @param {*} obj : The entity to be created
   */
  async create(obj: T) {
    const result = await this.repo?.create(obj);
    return result?.toObject() as unknown as T;
  }
}
