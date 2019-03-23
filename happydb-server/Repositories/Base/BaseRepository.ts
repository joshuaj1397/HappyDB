import { IRead } from '../Interfaces/IRead';

const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
  server: process.env.server,
  authentication: {
    type: "default",
    options: {
      database: process.env.database,
      userName: process.env.dbUserName,
      password: process.env.dbPassword
    }
  }
}

const connection = new Connection(config);
connection.on('connect', (err: any) => {
  // If no error do nothing, we're gucci otherwise...
  console.log(err);
});

// TODO: Finish implementing this function
export abstract class BaseRepository<T> implements IRead<T> {
  find(item: T): Promise<T[]> {
    var request = new Request("SELECT * FROM " + item.constructor.name, (err: any, rowCount: string) => {
      if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
      }
    });

    request.on('row', (columns: any) => {
      columns.forEach( (column: any) => {
        console.log(column.value);
      });
    });

    connection.execSql(request);
  }
  findOne(id: any): Promise<T> {
    throw new Error("Method not implemented.");
  }


}
