
import { QuizQuestion } from '../../types';

export const MAY_QUIZ: QuizQuestion[] = [
  { id: 301, type: 'mcq', modalId: 'may', question: "____ I come in, Professor?", options: ["Can", "May", "Should", "Would"], answer: "May", explanation: "May is the formal way to seek permission." },
  { id: 302, type: 'fill', modalId: 'may', question: "It ____ rain this afternoon, so take an umbrella.", answer: "may", explanation: "May expresses 50% possibility." },
  { id: 303, type: 'meaning', modalId: 'may', question: "What does 'May you live long' express?", options: ["Permission", "Possibility", "A wish", "Ability"], answer: "A wish", explanation: "May is used at the start of a sentence to express wishes." }
];
