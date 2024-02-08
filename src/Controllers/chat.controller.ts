import { Request, Response } from 'express';
import {ChatService} from "../Services/chat.service";

export default abstract class ChatController {

    static async sendMessage(req: Request, res: Response): Promise<void> {
        const chatService = new ChatService();
        try {
            const { message } = req.body;
            const response = await chatService.sendMessage(message, '');
            res.json({ response });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}