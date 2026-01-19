
import { QuizQuestion } from '../../types';

export const NEED_QUIZ: QuizQuestion[] = [
  { id: 1101, type: 'mcq', modalId: 'need', question: "You ____ not wait for me; I'm going to be late.", options: ["need", "dare", "must", "will"], answer: "need", explanation: "Need not (needn't) shows absence of obligation." },
  { id: 1102, type: 'fill', modalId: 'need', question: "____ I attend the meeting today? Is it mandatory?", answer: "Need", explanation: "Need used as a modal can start a question about necessity." },
  { id: 1103, type: 'mcq', modalId: 'need', question: "He ____ not have worried; the test was easy.", options: ["need", "can", "must", "shall"], answer: "need", explanation: "Need not have expresses an action that was unnecessary but performed." }
];
