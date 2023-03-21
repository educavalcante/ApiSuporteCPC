import { Request, Response } from 'express';
import { PatientsService } from '../services/PatientsService';

class PatientsController {
  async handle(request: Request, response: Response) {

    const service = new PatientsService();

    try {
      const result = await service.listAll();

      return response.json(result);

    } catch (err) {
      console.log(err);
    }


  }
}

export { PatientsController }