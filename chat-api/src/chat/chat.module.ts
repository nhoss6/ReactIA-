// src/chat/chat.module.ts
import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { OpenAIModule } from '../openai/openai.module'; // Importez OpenAIModule

@Module({
  imports: [OpenAIModule], // Ajoutez OpenAIModule aux imports
  providers: [ChatGateway],
})
export class ChatModule { }
