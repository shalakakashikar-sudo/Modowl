
import { QuizQuestion } from '../../types';

export const MIGHT_QUIZ: QuizQuestion[] = [
  { id: 401, type: 'mcq', modalId: 'might', question: "It ____ rain later, but the sun is out now.", options: ["must", "might", "can", "will"], answer: "might", explanation: "Might shows low possibility." },
  { id: 402, type: 'fill', modalId: 'might', question: "If I win the lottery, I ____ buy a mansion.", answer: "might", explanation: "Might is used for hypothetical low-chance outcomes." },
  { id: 403, type: 'error', modalId: 'might', question: "Identify the error: 'He might to be late.'", answer: "to", explanation: "Modals are followed by the base verb without 'to'." }
];
