
import { QuizQuestion } from '../../types';

export const MUST_QUIZ: QuizQuestion[] = [
  { id: 501, type: 'fill', modalId: 'must', question: "You ____ not smoke in the hospital.", answer: "must", explanation: "Must not is for strict prohibition." },
  { id: 502, type: 'mcq', modalId: 'must', question: "Soldiers ____ obey their commanders.", options: ["must", "can", "may", "might"], answer: "must", explanation: "Must expresses strong obligation or duty." },
  { id: 503, type: 'meaning', modalId: 'must', question: "In 'He must be tired', what does MUST show?", options: ["Obligation", "Deduction", "Permission", "Ability"], answer: "Deduction", explanation: "Must can show a strong logical conclusion." }
];
