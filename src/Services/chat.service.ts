import { Configuration, OpenAIApi, CreateChatCompletionRequest, ChatCompletionRequestMessageRoleEnum } from 'openai';
import { ChatMessage, ChatCompletionResponse } from '../Interfaces/chat.interface';

export class ChatService {
    private openai: OpenAIApi;

    constructor(apiKey: string) {
        const configuration = new Configuration({ apiKey });
        this.openai = new OpenAIApi(configuration);
    }

    async getChatCompletion(messages: ChatMessage[]): Promise<ChatCompletionResponse> {
        // Orientation de l'IA vers l'assistance
        const assistantInstructions = "You are a personal assistant. Provide helpful information or assistance.";

        const chatCompletionRequest: CreateChatCompletionRequest = {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: assistantInstructions },
                ...messages.map((message) => ({
                    role: message.role as ChatCompletionRequestMessageRoleEnum,
                    content: message.content,
                })),
            ],
        };

        try {
            const completion = await this.openai.createChatCompletion(chatCompletionRequest);
            return completion.data as ChatCompletionResponse;
        } catch (error) {
            throw new Error(`Error communicating with OpenAI API: ${error}`);
        }
    }
}
