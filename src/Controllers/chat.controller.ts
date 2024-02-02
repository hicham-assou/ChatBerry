import * as readline from 'readline';
import chalk from 'chalk';
import { ChatService } from '../Services/chat.service';
import { ChatMessage } from '../Interfaces/chat.interface';

export class ChatController {
    private service: ChatService;
    private messages: ChatMessage[];

    constructor(apiKey: string) {
        this.service = new ChatService(apiKey);
        this.messages = [];
    }

    startChatInterface(): void {
        const userInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        userInterface.setPrompt(`${chalk.blue('You: ')}`);
        userInterface.prompt();

        userInterface.on('line', async (input) => {
            const requestMessage: ChatMessage = {
                role: 'user',
                content: input,
            };
            this.messages.push(requestMessage);

            try {
                const completion = await this.service.getChatCompletion(this.messages);
                const responseMessage = completion.choices[0].message;

                if (responseMessage) {
                    console.log("Berry : " + chalk.green(responseMessage.content));
                    this.messages.push(responseMessage);
                }
            } catch (error) {
                console.error("Error communicating with OpenAI API:", error);
            }

            userInterface.prompt();
        });

        userInterface.on('close', () => {
            console.log(chalk.blue('Thank you for using this Demo'));
        });
    }
}
