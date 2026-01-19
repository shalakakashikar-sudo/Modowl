
import React, { useState, useMemo } from 'react';
import { QuizQuestion, MascotExpression } from '../types';
import DrOught from './DrOught';

interface QuizComponentProps {
  questions: QuizQuestion[];
  // Fix: changed questionId from number to string | number
  onComplete: (score: number, results: { questionId: string | number; isCorrect: boolean; userAnswer: string }[]) => void;
  title: string;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, onComplete, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  // Fix: changed questionId from number to string | number in the state type definition
  const [results, setResults] = useState<{ questionId: string | number; isCorrect: boolean; userAnswer: string }[]>([]);
  const [expression, setExpression] = useState<MascotExpression>(MascotExpression.IDLE);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;

    const isCorrect = userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
    setFeedback({
      isCorrect,
      text: isCorrect ? "Hoo-ray! That's perfectly correct." : `Oops! The correct answer is '${currentQuestion.answer}'.`
    });
    setExpression(isCorrect ? MascotExpression.HAPPY : MascotExpression.OOPS);
    
    // Fix: currentQuestion.id is string | number, which now matches the state type
    setResults(prev => [...prev, { 
      questionId: currentQuestion.id, 
      isCorrect, 
      userAnswer 
    }]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer("");
      setFeedback(null);
      setExpression(MascotExpression.IDLE);
    } else {
      const finalScore = results.filter(r => r.isCorrect).length;
      onComplete(finalScore, results);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-900/50 rounded-3xl border border-slate-700 backdrop-blur-md">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <DrOught expression={expression} />
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-indigo-300 serif">{title}</h2>
            <span className="text-slate-400 font-medium">Question {currentIndex + 1} of {questions.length}</span>
          </div>

          <div className="p-6 bg-slate-800 rounded-2xl shadow-inner min-h-[150px] flex flex-col justify-center">
            <p className="text-xl leading-relaxed text-slate-100">{currentQuestion.question}</p>
          </div>

          <div className="space-y-4">
            {currentQuestion.type === 'mcq' || currentQuestion.type === 'meaning' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options?.map((opt, i) => (
                  <button
                    key={i}
                    disabled={!!feedback}
                    onClick={() => setUserAnswer(opt)}
                    className={`p-4 rounded-xl text-left border-2 transition-all duration-200 ${
                      userAnswer === opt 
                      ? 'bg-indigo-600 border-indigo-400 text-white' 
                      : 'bg-slate-800 border-slate-700 hover:border-indigo-500 text-slate-300'
                    } ${feedback ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                disabled={!!feedback}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full p-4 bg-slate-800 border-2 border-slate-700 rounded-xl focus:border-indigo-500 outline-none text-white text-lg"
              />
            )}
          </div>

          {feedback ? (
            <div className={`p-4 rounded-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 ${
              feedback.isCorrect ? 'bg-emerald-900/40 border border-emerald-500 text-emerald-100' : 'bg-rose-900/40 border border-rose-500 text-rose-100'
            }`}>
              <div className="flex-1">
                <p className="font-bold mb-1">{feedback.isCorrect ? 'Excellent!' : 'Keep learning!'}</p>
                <p className="text-sm opacity-90">{currentQuestion.explanation}</p>
              </div>
              <button 
                onClick={handleNext}
                className="px-6 py-2 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors"
              >
                {currentIndex < questions.length - 1 ? 'Next' : 'Finish Quiz'}
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!userAnswer}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                userAnswer 
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
