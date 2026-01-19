
import { QuizQuestion } from '../../types';

export const SHOULD_QUIZ: QuizQuestion[] = [
  { id: 601, type: 'mcq', modalId: 'should', question: "You ____ revise your lessons daily.", options: ["should", "could", "might", "may"], answer: "should", explanation: "Should is for standard advice." },
  { id: 602, type: 'fill', modalId: 'should', question: "You ____ have told me about the meeting sooner. (Express regret)", answer: "should", explanation: "Should have is used for past regrets." },
  { id: 603, type: 'error', modalId: 'should', question: "Find the error: 'He shoulds study harder.'", answer: "shoulds", explanation: "Modals never take an 's' in the third person." }
];
