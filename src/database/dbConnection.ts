const odbc = require('odbc');

class dbConnection {
  async query(qSql: any, aParams: any): Promise<any> {

    return new Promise(res => {
      const connectionConfig = {
        connectionString: `DRIVER=Firebird/InterBase(r) driver; UID=suporteApi;USER=${process.env.USER_DB};PWD=${process.env.PASSWORD_DB};DBNAME=${process.env.DATABASE_DB}`,
        connectionTimeout: 10,
        loginTimeout: 10
      }

      odbc.connect(connectionConfig, (error: any, connection: any) => {
        if (error) {
          console.log(error);
          res(error);
        }

        connection.query(qSql, aParams, (error: any, result: any[]) => {
          if (error) {
            console.log('Erro ao executar a query: ', error);
            res(error);
          }

          res(result);

          connection.close((error: any) => {
            if (error) {
              return;
            }
          });

        });

      });
    });

  }
}

export { dbConnection }