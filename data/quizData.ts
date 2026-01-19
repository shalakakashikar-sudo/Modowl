import { QuizQuestion } from '../types';
import { CAN_QUIZ } from './quizzes/can';
import { COULD_QUIZ } from './quizzes/could';
import { MAY_QUIZ } from './quizzes/may';
import { MIGHT_QUIZ } from './quizzes/might';
import { MUST_QUIZ } from './quizzes/must';
import { SHOULD_QUIZ } from './quizzes/should';
import { WILL_QUIZ } from './quizzes/will';
import { WOULD_QUIZ } from './quizzes/would';
import { SHALL_QUIZ } from './quizzes/shall';
import { OUGHT_TO_QUIZ } from './quizzes/oughtTo';
import { NEED_QUIZ } from './quizzes/need';
import { DARE_QUIZ } from './quizzes/dare';
import { HAVE_TO_QUIZ } from './quizzes/haveTo';
import { HAD_BETTER_QUIZ } from './quizzes/hadBetter';
import { USED_TO_QUIZ } from './quizzes/usedTo';
import { BE_ABLE_TO_QUIZ } from './quizzes/beAbleTo';

export const ALL_QUIZ_QUESTIONS: QuizQuestion[] = [
  ...CAN_QUIZ,
  ...COULD_QUIZ,
  ...MAY_QUIZ,
  ...MIGHT_QUIZ,
  ...MUST_QUIZ,
  ...SHOULD_QUIZ,
  ...WILL_QUIZ,
  ...WOULD_QUIZ,
  ...SHALL_QUIZ,
  ...OUGHT_TO_QUIZ,
  ...NEED_QUIZ,
  ...DARE_QUIZ,
  ...HAVE_TO_QUIZ,
  ...HAD_BETTER_QUIZ,
  ...USED_TO_QUIZ,
  ...BE_ABLE_TO_QUIZ
];