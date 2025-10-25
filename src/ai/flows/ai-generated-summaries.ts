'use server';
/**
 * @fileOverview AI-powered summaries for TRI concepts and study materials.
 *
 * - generateTriSummary - A function that generates a summary of the TRI concept.
 * - AiGeneratedSummariesInput - The input type for the generateTriSummary function.
 * - AiGeneratedSummariesOutput - The return type for the generateTriSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiGeneratedSummariesInputSchema = z.object({
  topic: z.string().describe('The topic to generate a summary for.'),
});
export type AiGeneratedSummariesInput = z.infer<typeof AiGeneratedSummariesInputSchema>;

const AiGeneratedSummariesOutputSchema = z.object({
  summary: z.string().describe('A summary of the topic.'),
});
export type AiGeneratedSummariesOutput = z.infer<typeof AiGeneratedSummariesOutputSchema>;

export async function generateTriSummary(input: AiGeneratedSummariesInput): Promise<AiGeneratedSummariesOutput> {
  return generateTriSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGeneratedSummariesPrompt',
  input: {schema: AiGeneratedSummariesInputSchema},
  output: {schema: AiGeneratedSummariesOutputSchema},
  prompt: `You are Professor Gemini AI, an expert in TRI (Teoria de Resposta ao Item). Please provide a concise and informative summary of the following topic related to TRI:

Topic: {{{topic}}}

Summary:`,
});

const generateTriSummaryFlow = ai.defineFlow(
  {
    name: 'generateTriSummaryFlow',
    inputSchema: AiGeneratedSummariesInputSchema,
    outputSchema: AiGeneratedSummariesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
