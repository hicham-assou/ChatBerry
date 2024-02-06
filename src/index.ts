import express from 'express';
import { router } from './Routes/chat.route';
import  * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ✅ `);
});