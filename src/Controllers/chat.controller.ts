import { ChatService } from '../Services/chat.service';
import { ChatMessage } from '../Interfaces/chat.interface';
import { Request, Response } from 'express';


export class ChatController {
    private service: ChatService;
    private messages: ChatMessage[];

    constructor(apiKey: string) {
        this.service = new ChatService(apiKey);
        this.messages = [];
    }

    async handleUserInput(input: string) {
        const requestMessage: ChatMessage = {
            role: 'user',
            content: input,
        };
        this.messages.push(requestMessage);

        try {
            // Envoyez la demande au service de chat
            const completion = await this.service.getChatCompletion(this.messages);
            const responseMessage = completion.choices[0].message.content;

            if (responseMessage) {
                this.messages.push({ role: 'system', content: responseMessage });
                return responseMessage;
            }
        } catch (error) {
            console.error("Erreur de communication avec le service de chat:", error);
            throw new Error('Erreur de communication avec le service de chat');
        }
    }

    async handleChatRequest(req: Request, res: Response): Promise<void> {
        const userInput = req.body.content;

        try {
            const responseMessage = await this.handleUserInput(userInput);
            res.json({ message: responseMessage });
        } catch (error) {
            console.error("Erreur lors du traitement de la demande:", error);
            res.status(500).json({ error: 'Erreur de communication avec le service de chat' });
        }
    }
}
