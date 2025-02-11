import { google } from '@ai-sdk/google';
import { customProvider } from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'gemini';

export const myProvider = customProvider({
  languageModels: {
    'gemini': google('gemini-2.0-flash-001'),
  }
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Fast and efficient AI model',
  },
];
