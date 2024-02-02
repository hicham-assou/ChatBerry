import * as dotenv from 'dotenv';
import { ChatController } from './Controllers/chat.controller';

dotenv.config();

console.log("perfect ✅ ")

const controller = new ChatController(process.env.OPENAI_API_KEY || '');
controller.startChatInterface();
