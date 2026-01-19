
import React, { useState, useMemo, useEffect } from 'react';
import { AppState, MascotExpression, ModalUnit } from './types.ts';
import { ALL_MODALS } from './data/modalRegistry.ts';
import { ALL_QUIZ_QUESTIONS } from './data/quizData.ts';
import DrOught from './components/DrOught.tsx';
import QuizComponent from './components/QuizComponent.tsx';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    currentView: 'home',
    completedModals: [],
    score: 0,
    quizQuestions: [],
    currentQuestionIndex: 0,
    quizResults: []
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state.currentView, state.selectedModalId]);

  const selectedModal = useMemo(() => 
    ALL_MODALS.find(m => m.id === (state.selectedModalId || (state.pendingQuizType === 'modal' ? state.selectedModalId : undefined))), 
    [state.selectedModalId, state.pendingQuizType]
  );

  const startLearning = (modalId: string) => {
    setState(prev => ({ ...prev, currentView: 'learn', selectedModalId: modalId }));
  };

  const startQuiz = (modalId: string) => {
    setState(prev => ({ 
      ...prev, 
      currentView: 'choose-count', 
      pendingQuizType: 'modal',
      selectedModalId: modalId
    }));
  };

  const startFinalQuiz = () => {
    setState(prev => ({ 
      ...prev, 
      currentView: 'choose-count', 
      pendingQuizType: 'final',
      selectedModalId: undefined
    }));
  };

  const initiateQuiz = (count: number) => {
    let pool = state.pendingQuizType === 'modal' 
      ? ALL_QUIZ_QUESTIONS.filter(q => q.modalId === state.selectedModalId)
      : [...ALL_QUIZ_QUESTIONS];
    
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, Math.min(count, shuffled.length));

    setState(prev => ({
      ...prev,
      currentView: prev.pendingQuizType === 'final' ? 'final-quiz' : 'quiz',
      quizQuestions: selectedQuestions,
      currentQuestionIndex: 0,
      quizResults: []
    }));
  };

  const handleQuizComplete = (score: number, results: any[]) => {
    setState(prev => ({ 
      ...prev, 
      currentView: 'results', 
      score, 
      quizResults: results,
      completedModals: prev.selectedModalId ? [...new Set([...prev.completedModals, prev.selectedModalId])] : prev.completedModals
    }));
  };

  const goHome = () => {
    setState(prev => ({ ...prev, currentView: 'home', selectedModalId: undefined, pendingQuizType: undefined }));
  };

  const renderChooseCount = () => {
    const counts = [5, 10, 20, 30, 40, 50];
    const poolSize = state.pendingQuizType === 'modal' 
      ? ALL_QUIZ_QUESTIONS.filter(q => q.modalId === state.selectedModalId).length
      : ALL_QUIZ_QUESTIONS.length;

    return (
      <div className="max-w-4xl mx-auto space-y-12 py-12 animate-in fade-in zoom-in duration-500 pb-20">
        <div className="text-center space-y-8">
          <DrOught expression={MascotExpression.THINKING} bubbleText="Hoo! How many challenges shall we face today? Choice is the first step to wisdom." />
          <h1 className="text-5xl font-black text-indigo-300 serif">Choose Your Path</h1>
          <p className="text-xl text-slate-300 serif italic">
            Select the number of questions for {state.pendingQuizType === 'final' ? "The Wisdom Test" : `the ${selectedModal?.name} Quiz`}.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {counts.map(count => (
            <button
              key={count}
              onClick={() => initiateQuiz(count)}
              className="p-8 bg-slate-800/60 border-2 border-slate-700 hover:border-indigo-400 hover:bg-slate-700/80 rounded-[2rem] transition-all transform hover:-translate-y-2 group shadow-xl"
            >
              <div className="text-4xl font-black text-white mb-2 group-hover:text-indigo-300 transition-colors">{count}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Questions</div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={goHome}
            className="text-slate-500 hover:text-slate-300 font-bold transition-colors underline decoration-slate-700 underline-offset-8"
          >
            Change my mind and go back
          </button>
        </div>
      </div>
    );
  };

  const renderHome = () => (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-12 py-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <DrOught expression={MascotExpression.IDLE} />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
          <h1 className="text-7xl md:text-9xl font-black text-indigo-300 drop-shadow-2xl tracking-tight serif uppercase">MODOWL</h1>
          <p className="text-3xl text-slate-200 serif italic font-light">Learn Modals the Wise Way</p>
          <p className="text-xl text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium opacity-90">
            Hoo! Welcome to the Observatory. I am Dr. Ought. Together, we shall explore the whimsical world of modal verbs—the magic keys to English meaning.
          </p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <button 
              onClick={startFinalQuiz}
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-black text-lg shadow-2xl shadow-indigo-900/50 transition-all transform hover:scale-105 active:scale-95"
            >
              The Wisdom Test
            </button>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {ALL_MODALS.map(modal => (
          <div 
            key={modal.id}
            onClick={() => startLearning(modal.id)}
            className="group p-10 bg-slate-800/40 border-2 border-slate-700 hover:border-indigo-400 rounded-[2.5rem] cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-900/30 backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-slate-700/50 text-indigo-300">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={modal.icon || "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.754 18 18.168 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"} />
                 </svg>
              </div>
              {state.completedModals.includes(modal.id) && (
                <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-black border border-emerald-500/30 uppercase tracking-widest">Wise</span>
              )}
            </div>
            <h3 className="text-4xl font-bold text-indigo-200 serif mb-2">{modal.name}</h3>
            <p className="text-slate-300 text-lg line-clamp-2 leading-snug font-medium mb-8">{modal.quickDefinition}</p>
            <div className="flex items-center gap-3 text-indigo-400 font-black text-base group-hover:gap-6 transition-all uppercase tracking-wider">
              Explore <span>→</span>
            </div>
          </div>
        ))}
      </section>

      <div className="p-12 bg-indigo-950/30 rounded-[3rem] border-2 border-indigo-500/20 text-center backdrop-blur-md">
        <h2 className="text-4xl font-bold text-indigo-100 mb-8 serif">The Grammar Map</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-slate-800/80 px-6 py-3 rounded-2xl text-sm font-bold text-indigo-300 border border-slate-700 shadow-lg">Ability: CAN, COULD</div>
          <div className="bg-slate-800/80 px-6 py-3 rounded-2xl text-sm font-bold text-indigo-300 border border-slate-700 shadow-lg">Duty: MUST, OUGHT TO, SHOULD</div>
          <div className="bg-slate-800/80 px-6 py-3 rounded-2xl text-sm font-bold text-indigo-300 border border-slate-700 shadow-lg">Chance: MAY, MIGHT</div>
          <div className="bg-slate-800/80 px-6 py-3 rounded-2xl text-sm font-bold text-indigo-300 border border-slate-700 shadow-lg">Intent: WILL, WOULD, SHALL</div>
        </div>
      </div>
    </div>
  );

  const renderLearn = () => {
    if (!selectedModal) return null;
    return (
      <div className="space-y-12 animate-in slide-in-from-right-12 duration-500 pb-20">
        <button 
          onClick={goHome}
          className="bg-slate-800/50 hover:bg-slate-700 px-6 py-3 rounded-full text-slate-300 hover:text-white flex items-center gap-3 transition-all border border-slate-700 group font-bold"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Library
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12">
            <div className={`p-1 bg-gradient-to-r ${selectedModal.colorTheme || 'from-indigo-500 to-purple-600'} rounded-[3rem] shadow-2xl`}>
              <div className="bg-slate-900 rounded-[2.9rem] p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                  <svg width="400" height="400" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="currentColor" className="text-indigo-400" />
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-8xl font-black text-white serif tracking-wide drop-shadow-lg">{selectedModal.name}</h1>
                    <p className="text-3xl text-indigo-200 serif italic font-light">{selectedModal.quickDefinition}</p>
                  </div>
                  <div className="bg-white/10 p-8 rounded-[2rem] border border-white/20 backdrop-blur-sm text-center">
                    <p className="text-xs font-black uppercase tracking-widest text-indigo-300 mb-2">Strength</p>
                    <div className="text-5xl font-black text-white">{selectedModal.strength}%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 rounded-[3rem] p-12 border-2 border-slate-700 shadow-xl relative overflow-hidden">
              <h2 className="text-4xl font-bold text-white serif mb-10 border-b-2 border-indigo-500/30 pb-4 inline-block">The Wise Breakdown</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">1</span>
                      Meanings & Essence
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedModal.meanings.map((m, i) => (
                        <span key={i} className="px-5 py-2 bg-indigo-600/20 text-indigo-200 rounded-full text-lg font-bold border border-indigo-500/30">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">2</span>
                      Key Functions
                    </h3>
                    <ul className="space-y-4">
                      {selectedModal.functions.map((f, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-200 text-xl font-medium group">
                          <span className="text-indigo-500 transform group-hover:scale-125 transition-transform">✦</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">3</span>
                      Rules of Thumb
                    </h3>
                    <div className="p-8 bg-slate-900/50 rounded-3xl border border-slate-700 space-y-4">
                      {selectedModal.rules.map((r, i) => (
                        <p key={i} className="text-slate-300 font-medium leading-relaxed italic">• {r}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-indigo-950/20 p-10 rounded-[3rem] border-2 border-indigo-500/10 space-y-8">
                <h3 className="text-3xl font-bold text-indigo-200 serif">Real-World Examples</h3>
                <div className="space-y-6">
                  {selectedModal.examples.map((ex, i) => (
                    <div key={i} className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 group hover:border-indigo-400/50 transition-all">
                      <p className="text-xl text-white font-medium mb-2 italic">"{ex.sentence}"</p>
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">
                        Context: {ex.context}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="space-y-8">
                <section className="bg-rose-950/20 p-10 rounded-[3rem] border-2 border-rose-500/20">
                  <h3 className="text-3xl font-bold text-rose-300 serif mb-6">Common Pitfalls</h3>
                  <div className="space-y-4">
                    {selectedModal.commonMistakes.map((m, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-300 font-medium leading-snug">
                        <span className="text-rose-500 font-black">✘</span>
                        {m}
                      </div>
                    ))}
                  </div>
                </section>

                {selectedModal.contrastNotes && (
                  <section className="bg-amber-950/20 p-10 rounded-[3rem] border-2 border-amber-500/20">
                    <h3 className="text-2xl font-bold text-amber-200 serif mb-4">Wise Contrast</h3>
                    <p className="text-slate-300 italic leading-relaxed text-lg">
                      {selectedModal.contrastNotes}
                    </p>
                  </section>
                )}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 sticky top-12 flex flex-col items-center space-y-8">
            <div className="w-full">
              <DrOught expression={MascotExpression.THINKING} bubbleText={selectedModal.wisdom} />
            </div>
            
            <div className="w-full p-8 bg-slate-800/80 rounded-[3rem] border-2 border-slate-700 shadow-2xl space-y-8 text-center backdrop-blur-md">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white serif">Ready for the Test?</h4>
                <p className="text-slate-400 text-sm font-medium">Verify your mastery of {selectedModal.name} with Dr. Ought.</p>
              </div>
              
              <button 
                onClick={() => startQuiz(selectedModal.id)}
                className={`w-full py-6 bg-gradient-to-r ${selectedModal.colorTheme || 'from-indigo-600 to-indigo-500'} text-white rounded-[2rem] font-black text-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all transform`}
              >
                Start Quiz
              </button>
              
              <div className="pt-4 border-t border-slate-700">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Learning Progress</p>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-1000"
                    style={{ width: state.completedModals.includes(selectedModal.id) ? '100%' : '10%' }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-indigo-950/10 rounded-3xl border border-indigo-500/10 text-center">
              <p className="text-xs text-indigo-400/80 italic font-medium">"Language is the dress of thought; modals are the accessories." — Dr. Ought</p>
            </div>
          </aside>
        </div>
      </div>
    );
  };

  const renderResults = () => (
    <div className="max-w-4xl mx-auto space-y-12 py-12 animate-in zoom-in duration-500 pb-20">
      <div className="text-center space-y-8">
        <DrOught expression={state.score > (state.quizQuestions.length / 2) ? MascotExpression.HAPPY : MascotExpression.OOPS} />
        <h1 className="text-7xl font-black text-indigo-300 serif">Evaluation Complete</h1>
        <div className="relative inline-block">
          <div className="text-9xl font-black text-white drop-shadow-2xl">{state.score}</div>
          <div className="absolute -top-4 -right-8 text-3xl font-bold text-slate-500">/ {state.quizQuestions.length}</div>
        </div>
        <p className="text-3xl text-slate-200 italic serif max-w-2xl mx-auto leading-relaxed">
          {state.score === state.quizQuestions.length 
            ? "Immaculate! Your grasp of these modal nuances is truly owl-like." 
            : "The path to wisdom is paved with attempts. Reflect on your choices and try once more."}
        </p>
      </div>

      <div className="bg-slate-800/60 p-12 rounded-[4rem] border-2 border-slate-700 space-y-10 backdrop-blur-md shadow-2xl">
        <h2 className="text-4xl font-bold text-indigo-200 serif border-b border-slate-700 pb-6">Grammar Review</h2>
        <div className="grid grid-cols-1 gap-8">
          {state.quizResults.map((res, i) => {
            const q = state.quizQuestions.find(qq => qq.id === res.questionId);
            return (
              <div key={i} className={`p-8 rounded-3xl border-2 transition-all group ${res.isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-rose-500/20 bg-rose-500/5'}`}>
                <p className="text-2xl text-slate-100 mb-6 font-medium leading-snug">{q?.question}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Your Selection</span>
                    <span className={`px-6 py-2 rounded-xl font-black text-lg ${res.isCorrect ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
                      {res.userAnswer}
                    </span>
                  </div>
                  {!res.isCorrect && (
                    <div className="flex flex-col gap-1 text-right">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Wise Correction</span>
                      <span className="text-emerald-400 font-black text-xl px-6 py-2 bg-emerald-400/10 rounded-xl">
                        {q?.answer}
                      </span>
                    </div>
                  )}
                </div>
                {!res.isCorrect && (
                  <div className="mt-6 p-4 bg-slate-900/40 rounded-xl border border-slate-700/50 text-sm text-slate-400 italic">
                    Reason: {q?.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        <button 
          onClick={goHome}
          className="flex-1 py-6 bg-slate-700 hover:bg-slate-600 text-white rounded-3xl font-black text-2xl transition-all shadow-xl active:scale-95 border-b-4 border-slate-800"
        >
          Return to Library
        </button>
        <button 
          onClick={() => state.pendingQuizType === 'modal' ? startQuiz(state.selectedModalId!) : startFinalQuiz()}
          className="flex-1 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-3xl font-black text-2xl transition-all shadow-xl shadow-indigo-900/40 active:scale-95 border-b-4 border-indigo-800"
        >
          Retry Assessment
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-[180px] -mr-[500px] -mt-[500px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-indigo-600/5 rounded-full blur-[180px] -ml-[500px] -mb-[500px] pointer-events-none"></div>

      <nav className="fixed top-0 left-0 right-0 h-2 z-50 bg-indigo-500/20 backdrop-blur-sm">
         <div className="h-full bg-indigo-500 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.8)]" style={{ width: `${(state.completedModals.length / ALL_MODALS.length) * 100}%` }}></div>
      </nav>

      <main className="flex-1 container mx-auto px-6 py-16 relative z-10 max-w-7xl">
        {state.currentView === 'home' && renderHome()}
        {state.currentView === 'learn' && renderLearn()}
        {state.currentView === 'choose-count' && renderChooseCount()}
        {(state.currentView === 'quiz' || state.currentView === 'final-quiz') && (
          <div className="animate-in fade-in duration-500 pt-12">
            <button 
              onClick={goHome}
              className="mb-8 px-8 py-3 bg-slate-800/80 hover:bg-slate-700 rounded-full border border-slate-700 text-slate-300 font-bold transition-all flex items-center gap-2 group shadow-xl"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Abandon Quiz
            </button>
            <QuizComponent 
              questions={state.quizQuestions} 
              title={state.currentView === 'final-quiz' ? "The Wisdom Test" : `${selectedModal?.name} Master Quiz`}
              onComplete={handleQuizComplete} 
            />
          </div>
        )}
        {state.currentView === 'results' && renderResults()}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-2xl border-t border-slate-800 p-3 text-center z-50 shadow-[0_-5px_30px_rgba(0,0,0,0.6)]">
        <div className="flex justify-center items-center">
          <span className="px-4 py-1.5 bg-slate-800 rounded-full text-[9px] font-black border border-slate-700 tracking-[0.2em] text-indigo-100 shadow-inner">CREATED BY SHALAKA KASHIKAR</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
