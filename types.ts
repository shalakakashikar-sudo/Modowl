
export enum MascotExpression {
  IDLE = 'IDLE',
  HAPPY = 'HAPPY',
  THINKING = 'THINKING',
  OOPS = 'OOPS'
}

export interface Example {
  sentence: string;
  context?: string;
}

export interface ModalUnit {
  id: string;
  name: string;
  quickDefinition: string;
  meanings: string[];
  functions: string[];
  rules: string[];
  examples: Example[];
  commonMistakes: string[];
  contrastNotes?: string;
  wisdom: string;
  strength?: number; // 0-100 for visual scale
  colorTheme: string; // Tailwind gradient/color class
  icon: string; // SVG path or identifier
}

export interface QuizQuestion {
  id: string | number;
  type: 'mcq' | 'fill' | 'error' | 'meaning';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  modalId: string;
}

export interface AppState {
  currentView: 'home' | 'learn' | 'quiz' | 'final-quiz' | 'results' | 'choose-count';
  pendingQuizType?: 'modal' | 'final';
  selectedModalId?: string;
  completedModals: string[];
  score: number;
  quizQuestions: QuizQuestion[];
  currentQuestionIndex: number;
  quizResults: { questionId: number | string; isCorrect: boolean; userAnswer: string }[];
}
