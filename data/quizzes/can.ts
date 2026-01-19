
import { QuizQuestion } from '../../types';

export const CAN_QUIZ: QuizQuestion[] = [
  { id: 101, type: 'mcq', modalId: 'can', question: "I ____ speak three languages fluently.", options: ["can", "may", "must", "might"], answer: "can", explanation: "Use 'can' for present ability." },
  { id: 102, type: 'error', modalId: 'can', question: "Identify the error: 'He can swims fast.'", answer: "swims", explanation: "After modals, use base form (swim)." },
  { id: 103, type: 'fill', modalId: 'can', question: "Dogs ____ bark but they cannot speak.", answer: "can", explanation: "Can expresses physical ability." }
];
