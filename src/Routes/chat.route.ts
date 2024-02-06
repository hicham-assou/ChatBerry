import express from 'express';
import ChatController from "../Controllers/chat.controller";


const router = express.Router();

router.post('/sendMessage', (req, res) => ChatController.sendMessage(req, res));


router.get('/sendMessage', (req, res) => {
    res.send('get ok');
});

export { router };