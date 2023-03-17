import express, { Request, Response, Application } from 'express';
import { getCategories, getValue } from './categories/db';
import cors from 'cors';

// export const router = express.Router();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({ origin: '*' }))

// app.use('/', router);


/* GET home page. */
app.get('/categories', async (req: Request, res: Response) => {
    const categories = await getCategories();

    res.status(200).json(categories);
});
app.get('/categories/:categoryId', async (req: Request, res: Response) => {
    const value = await getValue(req.params.categoryId);

    res.status(200).json(value);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
