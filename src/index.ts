import express from 'express';
import cors from 'cors';
import { router } from './Routes/chat.route';
import  * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const app = express();
const PORT = process.env.SERVER_PORT;
const FrontendPORT = process.env.FRONTEND_PORT;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use('/api', router);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ✅              http://localhost:3000`);
});

