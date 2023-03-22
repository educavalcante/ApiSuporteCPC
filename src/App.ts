import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import router from './routes';
import "express-async-errors";
import { sign } from 'jsonwebtoken';


const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error (app.use)",
    });
  }
);

// app.post('/login',(req,res)=>{
//   const { user, password } = req.body;

//   if(user == 'zapzap' && password == 'ajuda'){
//     const id = 1;

//     const token = sign({id},process.env.SECRET_ID,{
//       expiresIn: "1d"
//     });

//     return res.json({ auth: true, token: token })
//   }

//   return res.status(500).json({message: 'Login Inválido'});
// })


app.listen('3031', () => {
  console.log('Server running in PORT 3031: http://localhost:3031');
});