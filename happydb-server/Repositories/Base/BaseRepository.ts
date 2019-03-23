import { IRead } from '../Interfaces/IRead';

export abstract class BaseRepository<T> implements IRead<T> {
  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }  findOne(id: any): Promise<T> {
    throw new Error("Method not implemented.");
  }


}
