import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OpenAIService } from '../openai/openai.service';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private openAIService: OpenAIService) { }

  async handleTranslateRequest(client: any, payload: { text: string; targetLanguage: string }) {
    const translatedText = await this.openAIService.translate(payload.text, payload.targetLanguage);
    client.emit('translationResult', translatedText);
  }

  // Ajoutez ici d'autres méthodes pour gérer la communication en temps réel
}
