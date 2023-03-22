import { dbConnection } from "../database/dbConnection";

class ChamadosService {
  async listAll() {
    const execute = new dbConnection();

    const result = execute.query('SELECT FIRST 10 INDICE, ASSUNTO, TIPO, PRIORIDADE, DATA FROM AJUDA WhERE FECHADO is null', []);

    return result;
  }
}

export { ChamadosService }