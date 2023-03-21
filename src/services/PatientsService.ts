import { dbConnection } from "../database/dbConnection";

class PatientsService {
  async listAll(){
    const execute = new dbConnection();

    const result = execute.query('SELECT FIRST 3 CODIGOPAC,A_NOME,TELEFONE FROM PACIENTE',[]);

    return result;
  }
}

export {PatientsService}