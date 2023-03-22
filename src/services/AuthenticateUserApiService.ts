import { dbConnection } from '../database/dbConnection';
import { sign } from 'jsonwebtoken';

class AuthenticateUserApiService {
  async execute(cnpj: string, email: string, senha: string) {
    const bd = new dbConnection();

    const result = await bd.query('SELECT FIRST 1 USUARIO_NOME, USUARIO_EMAIL, USUARIO_CNPJ  FROM LOGIN(?,?,?)', [cnpj, email, senha]);

    const id = result[0].USUARIO_NOME;
    console.log(id);

    if (id === null) {
      throw new Error("Login não encontrado")
      return;
      //      throw new Error("dassads")
      //
    }

    try {
      const token = sign({ id }, process.env.SECRET_ID, {
        expiresIn: "1d"
      });
      console.log(token);
      return { token };

    } catch (err) {
      return console.error(err);
    }

  }
}
export { AuthenticateUserApiService }