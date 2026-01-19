
import { QuizQuestion } from '../../types';

export const HAD_BETTER_QUIZ: QuizQuestion[] = [
  { id: 1401, type: 'mcq', modalId: 'had-better', question: "You ____ hurry, or you will miss the last train home!", options: ["had better", "could", "might", "may"], answer: "had-better", explanation: "HAD BETTER is used for strong advice with urgent consequences." },
  { id: 1402, type: 'fill', modalId: 'had-better', question: "It's cold outside. You ____ better wear a coat.", answer: "had", explanation: "The structure is 'had better' + base verb." },
  { id: 1403, type: 'error', modalId: 'had-better', question: "Identify the error: 'You had better to stay at home today because you look ill.'", answer: "to", explanation: "HAD BETTER is followed by the base verb without 'to'." }
];
