'use server';

/**
 * @fileOverview A personalized study plan generator AI agent.
 *
 * - generatePersonalizedStudyPlan - A function that handles the study plan generation process.
 * - GeneratePersonalizedStudyPlanInput - The input type for the generatePersonalizedStudyPlan function.
 * - GeneratePersonalizedStudyPlanOutput - The return type for the generatePersonalizedStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedStudyPlanInputSchema = z.object({
  triScoreReport: z
    .string()
    .describe('The student\'s current TRI score report.'),
  learningGoals: z.string().describe('The student\'s learning goals.'),
});
export type GeneratePersonalizedStudyPlanInput = z.infer<
  typeof GeneratePersonalizedStudyPlanInputSchema
>;

const GeneratePersonalizedStudyPlanOutputSchema = z.object({
  studyPlan: z
    .string()
    .describe('A personalized study plan based on the TRI score report and learning goals.'),
});
export type GeneratePersonalizedStudyPlanOutput = z.infer<
  typeof GeneratePersonalizedStudyPlanOutputSchema
>;

export async function generatePersonalizedStudyPlan(
  input: GeneratePersonalizedStudyPlanInput
): Promise<GeneratePersonalizedStudyPlanOutput> {
  return generatePersonalizedStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedStudyPlanPrompt',
  input: {schema: GeneratePersonalizedStudyPlanInputSchema},
  output: {schema: GeneratePersonalizedStudyPlanOutputSchema},
  prompt: `You are an AI study plan generator. You will generate a personalized study plan based on the student's TRI score report and learning goals.

TRI Score Report: {{{triScoreReport}}}
Learning Goals: {{{learningGoals}}}

Study Plan:`,
});

const generatePersonalizedStudyPlanFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedStudyPlanFlow',
    inputSchema: GeneratePersonalizedStudyPlanInputSchema,
    outputSchema: GeneratePersonalizedStudyPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
