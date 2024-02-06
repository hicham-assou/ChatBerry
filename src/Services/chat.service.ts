import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: "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",
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
