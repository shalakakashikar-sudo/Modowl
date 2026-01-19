
import { QuizQuestion } from '../../types';

export const WILL_QUIZ: QuizQuestion[] = [
  { id: 701, type: 'fill', modalId: 'will', question: "I ____ help you with your bags.", answer: "will", explanation: "Will is used for offers and promises." },
  { id: 702, type: 'mcq', modalId: 'will', question: "I promise I ____ call you tonight.", options: ["will", "must", "can", "may"], answer: "will", explanation: "Will is the standard modal for promises." },
  { id: 703, type: 'mcq', modalId: 'will', question: "The doorbell rang. I ____ open it.", options: ["will", "shall", "must", "might"], answer: "will", explanation: "Will is used for instant decisions." }
];
