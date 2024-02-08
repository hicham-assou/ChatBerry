import OpenAI from 'openai';
import dotenv from 'dotenv';
import promptGpt from "../utils/prompts/prompt.gpt";

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

const listMessages:string[] = []

export class ChatService {

    public async sendMessage(message: string): Promise<any> {
        let newMessage:string = '';

        if (listMessages.length != 0){
            newMessage = promptGpt.promptMessage(listMessages, message);
        }else
            newMessage = message;

        listMessages.push(' << moi : ' + message + '>>')


        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: newMessage }/*, {role: 'system', content:'tu es expert en programmation'}*/],
            model: 'gpt-3.5-turbo-16k',
            temperature: 0,
        });

        listMessages.push(' << toi : ' + response.choices[0].message.content + '>>')

        console.log('=> '+ newMessage)
        console.log('=> '+ listMessages)

        return response.choices[0].message.content;
    }
}
