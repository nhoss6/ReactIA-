// src/openai/openai.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Import correct
import { OpenAIService } from './openai.service';

@Module({
    imports: [HttpModule], // Ajoutez HttpModule aux imports
    providers: [OpenAIService],
    exports: [OpenAIService],
})
export class OpenAIModule { }