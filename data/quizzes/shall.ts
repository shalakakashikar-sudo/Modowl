
import { QuizQuestion } from '../../types';

export const SHALL_QUIZ: QuizQuestion[] = [
  { id: 901, type: 'mcq', modalId: 'shall', question: "____ we dance?", options: ["Shall", "Will", "Must", "May"], answer: "Shall", explanation: "Shall is used for suggestions with 'we'." },
  { id: 902, type: 'fill', modalId: 'shall', question: "____ I carry your luggage for you?", answer: "Shall", explanation: "Shall is used for formal offers of help." },
  { id: 903, type: 'meaning', modalId: 'shall', question: "Shall is most commonly used with which pronouns in questions?", options: ["I and We", "He and She", "You and They", "It"], answer: "I and We", explanation: "Shall is traditional with first-person pronouns for offers/suggestions." }
];
