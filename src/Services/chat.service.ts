import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

const listMessages:string[] = []
export class ChatService {


    public async sendMessage(message: string): Promise<any> {
        listMessages.push(' << me : ' + message + '>>')
        let newMessage:string = '';
        if (listMessages.length != 0){
            newMessage = 'je vais te donner un nouveau prompt et l\'historique de notre conversation et j\'aimerai que tu me reponde sans reprendre tout l\'historique,' +
                ' chaque message est deliimité par + \'<<>>\'. voici l\'historique : '+ listMessages + '. Il faut avoir une conversation fluide comme si je parlais à un humain,' +
                ' voici le nouveau prompt auquel il faut repondre,: '
                +'<< ' + message + ' >>';
        }else
            newMessage = message

        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: newMessage }],
            model: 'gpt-3.5-turbo-16k',
            temperature: 0,
        });
        listMessages.push(' << you : ' + response.choices[0].message.content + '>>')

        console.log("=> " + listMessages)

        return response.choices[0].message.content;
    }
}
