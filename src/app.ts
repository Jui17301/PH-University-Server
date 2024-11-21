import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/module/student/student.route';
const app: Application = express();
// const port = 3000

//parsers

app.use(express.json());
app.use(cors());

//api/v1/students/create-student

//application Routes
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;

// console.log(process.cwd())
// C:\Users\sumi\Desktop\Level-2-Batch-4\PH-University-Server
