import { Request, Response } from 'express';
import { AuthenticateUserApiService } from '../services/AuthenticateUserApiService';


class AuthenticateUserController {
  async handle(request: Request, response: Response){

    const { login, password } = request.body;
    
    const service = new AuthenticateUserApiService();

    try{
      const result = await service.execute(login, password);
  
      return response.json(result);
    }catch(err){
      response.status(500).json({message: 'Login Inválido'});
    }

  }
}

export { AuthenticateUserController }