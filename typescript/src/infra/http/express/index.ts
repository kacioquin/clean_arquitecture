import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '../../../application/create-route.use-case';
import { ListAllRoutesUseCase } from '../../../application/list-all-route.use-case';
import { RouteInMemoryRepository } from '../../database/route-in-memory.repository';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const routeRepositoryInMemory = new RouteInMemoryRepository();

app.get('/routes',async  (_req: Request, res: Response) => {
  const listAllRoutesUseCase = new ListAllRoutesUseCase(routeRepositoryInMemory);
  const output = await listAllRoutesUseCase.execute();
  res.json(output);
})

app.post('/routes', async (req: Request, res: Response) => {
  const createRouteUseCase = new CreateRouteUseCase(routeRepositoryInMemory);
  const output = await createRouteUseCase.execute(req.body);
  res.status(201).json(output);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
