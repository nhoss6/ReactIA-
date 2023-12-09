import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';
import { OpenAIService } from './openai/openai.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ChatGateway, OpenAIService],
})
export class AppModule { }
