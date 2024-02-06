import express from 'express';
import { router } from './Routes/chat.route';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ✅ `);
});