import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class OpenAIService {
    private openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({
            apiKey: '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',
        });
    }

    async translate(text: string, targetLanguage: string): Promise<string> {
        // Implémentez la logique de traduction en utilisant OpenAI ici
        // Assurez-vous de remplacer cette implémentation par la fonctionnalité réelle de traduction
        return `Texte traduit en ${targetLanguage}: ${text}`;
    }
}
