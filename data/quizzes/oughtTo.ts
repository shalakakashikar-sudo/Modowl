
import { QuizQuestion } from '../../types';

export const OUGHT_TO_QUIZ: QuizQuestion[] = [
  { id: 1001, type: 'mcq', modalId: 'ought-to', question: "We ____ to respect our elders.", options: ["ought", "should", "must", "can"], answer: "ought", explanation: "Ought is followed by 'to'." },
  { id: 1002, type: 'fill', modalId: 'ought-to', question: "You ____ to see a doctor about that cough.", answer: "ought", explanation: "Ought to is used for moral obligation or strong advice." },
  { id: 1003, type: 'error', modalId: 'ought-to', question: "Identify the error: 'We ought to helping the poor.'", answer: "helping", explanation: "Ought to is followed by the base verb (help)." }
];
