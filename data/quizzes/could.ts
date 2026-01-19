
import { QuizQuestion } from '../../types';

export const COULD_QUIZ: QuizQuestion[] = [
  { id: 201, type: 'meaning', modalId: 'could', question: "Which shows a polite suggestion?", options: ["Go now.", "We could watch a movie.", "You will help.", "Stay here."], answer: "We could watch a movie.", explanation: "Could is used for polite suggestions." },
  { id: 202, type: 'fill', modalId: 'could', question: "I ____ play piano when I was young.", answer: "could", explanation: "Could shows past ability." },
  { id: 203, type: 'mcq', modalId: 'could', question: "____ you pass the salt, please?", options: ["Can", "Could", "Must", "Shall"], answer: "Could", explanation: "Could is more polite than can for requests." }
];
