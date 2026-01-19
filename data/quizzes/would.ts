
import { QuizQuestion } from '../../types';

export const WOULD_QUIZ: QuizQuestion[] = [
  { id: 801, type: 'mcq', modalId: 'would', question: "____ you like some more coffee?", options: ["Would", "Should", "Shall", "Must"], answer: "Would", explanation: "Would you like is a polite offer." },
  { id: 802, type: 'fill', modalId: 'would', question: "When I lived in the village, I ____ walk by the river every morning.", answer: "would", explanation: "Would expresses past habits." },
  { id: 803, type: 'mcq', modalId: 'would', question: "If I were you, I ____ apologize.", options: ["would", "will", "can", "shall"], answer: "would", explanation: "Would is used in conditional sentences." }
];
