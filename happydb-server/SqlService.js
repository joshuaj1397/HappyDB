const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
  server: process.env.server,
  authentication: {
    type: "default",
    options: {
      database: process.env.database,
      userName: process.env.dbUserName,
      password: process.env.dbPassword,
      requestTimeout: 5*1000,
      connectTimeout: 10*1000,
      useColumnNames: true,
      camelCaseColumns: true,
      encrypt: true,
    }
  }
}

const connection = new Connection(config);
connection.on('connect', (err: any) => {
  // If no error do nothing, we're gucci otherwise...
  console.log(err);
});

const find = (projection, repo.constructor.name, condition) => {
  let table = repo.constructor.name;
  request = new Request("SELECT " + projection + " FROM " + table + " WHERE" + condition, (err, rowCount) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
    }

    connection.close();
  });

  request.on('row', (columns) => {
    console.log("columns", columns);  //should show your array
    console.log("typeof columns", typeof columns); //should by array
    columns.forEach(function(column) {
      if (column.value === null) {
        console.log('NULL');
      } else {
        console.log(column.value);
      }
    });
  });

  request.on('done', function(rowCount, more) {
    console.log(rowCount + ' rows returned');
  });

  // In SQL Server 2000 you may need: connection.execSqlBatch(request);
  connection.execSql(request);
}
