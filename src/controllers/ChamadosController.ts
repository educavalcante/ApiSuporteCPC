import { Request, Response } from 'express';
import { PatientsService } from '../services/PatientsService';
import { ChamadosService } from '../services/ChamadoService';

class ChamadosController {
  async handle(request: Request, response: Response) {

    const service = new ChamadosService();

    try {
      const result = await service.listAll();

      return response.json(result);

    } catch (err) {
      console.log(err);
    }


  }
}

export { ChamadosController }