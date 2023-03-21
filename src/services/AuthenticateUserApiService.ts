import { dbConnection } from '../database/dbConnection';
import { sign } from 'jsonwebtoken';

class AuthenticateUserApiService {
  async execute(login: number, password: string) {
    const bd = new dbConnection();

    const result = await bd.query('SELECT FIRST 1 CODIGO, NOME FROM LOGIN(?,?)', [login, password]);

    const id = result[0].CODIGO;
    console.log(id);

    if (!result) {
      return;
    }

    try {
      const token = sign({ id }, process.env.SECRET_ID, {
        expiresIn: "1d"
      });

      return { token };

    } catch (err) {
      return console.error(err);
    }

  }
}
export { AuthenticateUserApiService }