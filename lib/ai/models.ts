import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { perplexity } from '@ai-sdk/perplexity';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'deepseek-distill';

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || '',
});

export const myProvider = customProvider({
  languageModels: {
    'deepseek-distill': openrouter('deepseek/deepseek-r1-distill-llama-70b'),
    'qwen-turbo': openrouter('qwen/qwen-turbo'),
    'o3-mini-high': openrouter('openai/o3-mini-high'),
    'gpt4-latest': openrouter('openai/chatgpt-4o-latest'),
    'gpt4-mini': openrouter('openai/gpt-4o-mini'),
    'claude-sonnet': openrouter('anthropic/claude-3.5-sonnet'),
    'gemini-flash': openrouter('google/gemini-2.0-flash-001'),
    'sonar-pro': perplexity('sonar-pro'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'deepseek-distill',
    name: 'DeepSeek Distill',
    description: 'Distilled 70B model, balanced performance',
  },
  {
    id: 'qwen-turbo',
    name: 'Qwen Turbo',
    description: 'Fast and efficient for general tasks',
  },
  {
    id: 'o3-mini-high',
    name: 'O3 Mini High',
    description: 'Optimized mini model with high performance',
  },
  {
    id: 'gpt4-latest',
    name: 'GPT-4 Latest',
    description: 'Latest GPT-4 model for advanced tasks',
  },
  {
    id: 'gpt4-mini',
    name: 'GPT-4 Mini',
    description: 'Efficient GPT-4 model for quick responses',
  },
  {
    id: 'claude-sonnet',
    name: 'Claude Sonnet',
    description: 'Claude 3.5 Sonnet for balanced performance',
  },
  {
    id: 'gemini-flash',
    name: 'Gemini Flash',
    description: 'Fast Gemini model for quick responses',
  },
  {
    id: 'sonar-pro',
    name: 'Sonar Pro',
    description: 'Perplexity Sonar Pro with real-time web search',
  },
];
