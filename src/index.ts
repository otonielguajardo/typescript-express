import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';

const port = process.env.PORT || 3000;
const app: express.Application = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(
    '/',
    (req: Request, res: Response): Response => {
        return res.status(200).json('Hello World');
    }
);

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});
