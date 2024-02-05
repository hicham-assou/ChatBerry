import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';  // Ajoutez cette ligne
import { ChatController } from './Controllers/chat.controller';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir les fichiers statiques depuis le répertoire 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Route pour gérer les messages du chat
app.post('/chat', async (req, res) => {
    const controller = new ChatController(process.env.OPENAI_API_KEY || '');
    await controller.handleChatRequest(req, res);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port} ✅         http://localhost:3000/`);
});
