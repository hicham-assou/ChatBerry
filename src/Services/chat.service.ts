import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

export class ChatService {

    public async sendMessage(message: string): Promise<any> {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: message }],
            model: 'gpt-3.5-turbo',
            temperature: 0,
        });

        return response.choices[0].message.content;
    }
}
