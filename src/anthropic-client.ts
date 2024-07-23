import Anthropic from '@anthropic-ai/sdk';

export const createMessage = async (apiKey: string, message: string) => {
  try {
    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    
    const response = await anthropic.messages.create({
      max_tokens: 1024,
      messages: [{ role: 'user', content: message }],
      model: 'claude-3-opus-20240229',
    });

    
    return response
  } catch (error) {
    return error.message;
  }
}