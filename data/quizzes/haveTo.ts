
import { QuizQuestion } from '../../types';

export const HAVE_TO_QUIZ: QuizQuestion[] = [
  { id: 1301, type: 'mcq', modalId: 'have-to', question: "At my school, we ____ wear uniforms every day.", options: ["have to", "may", "can", "might"], answer: "have to", explanation: "HAVE TO is used for obligations imposed by external rules like school uniforms." },
  { id: 1302, type: 'fill', modalId: 'have-to', question: "Yesterday, the car broke down and we ____ walk three miles.", answer: "had to", explanation: "HAD TO is the past form of HAVE TO/MUST for obligations." },
  { id: 1303, type: 'error', modalId: 'have-to', question: "Identify the error: 'He have to finish his homework before he can play.'", answer: "have", explanation: "HAVE TO changes to 'HAS TO' for third-person singular (He/She/It)." }
];
