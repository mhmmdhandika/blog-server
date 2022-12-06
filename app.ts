import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: Number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is listening on port https://localhost:${port}`);
});
