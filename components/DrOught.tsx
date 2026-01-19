import React, { useState, useEffect, useCallback } from 'react';
import { MascotExpression } from '../types';
import { DIALOGUES } from '../constants';

// --- CSS STYLES FOR ANIMATIONS ---
const mascotStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
  @keyframes blink {
    0%, 96%, 100% { transform: scaleY(1); }
    98% { transform: scaleY(0.1); }
  }
  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-8deg); }
    75% { transform: rotate(8deg); }
  }
  @keyframes leafShake {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(10deg); }
  }
  @keyframes wingFlapR {
    0%, 100% { transform: rotate(15deg); }
    50% { transform: rotate(30deg); }
  }
   @keyframes wingFlapL {
    0%, 100% { transform: rotate(-15deg); }
    50% { transform: rotate(-30deg); }
  }
  @keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  .owl-float { animation: float 3.5s ease-in-out infinite; }
  .owl-blink { animation: blink 4s infinite; transform-origin: center; }
  .owl-wiggle { animation: wiggle 0.4s ease-in-out infinite; }
  .owl-pop { animation: pop 0.3s ease-out; }
  .wing-flap-r { animation: wingFlapR 0.3s ease-in-out infinite; transform-origin: 160px 130px; }
  .wing-flap-l { animation: wingFlapL 0.3s ease-in-out infinite; transform-origin: 40px 130px; }
  .leaf-sway { animation: leafShake 3s ease-in-out infinite; transform-origin: bottom center; }
`;

interface DrOughtProps {
  expression?: MascotExpression;
  onTickle?: () => void;
  bubbleText?: string;
}

const DrOught: React.FC<DrOughtProps> = ({ 
  expression = MascotExpression.IDLE, 
  onTickle, 
  bubbleText: externalBubble 
}) => {
  const [internalBubble, setInternalBubble] = useState<string>("");
  const [isTickled, setIsTickled] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = mascotStyles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    if (expression === MascotExpression.IDLE) {
      const interval = setInterval(() => {
        const randomMsg = DIALOGUES.idle[Math.floor(Math.random() * DIALOGUES.idle.length)];
        setInternalBubble(randomMsg);
        setPupilOffset({ x: Math.random() * 6 - 3, y: Math.random() * 4 - 2 });
      }, 6000);
      setInternalBubble(DIALOGUES.idle[0]);
      return () => clearInterval(interval);

    } else if (expression === MascotExpression.HAPPY) {
       setInternalBubble(DIALOGUES.correct[Math.floor(Math.random() * DIALOGUES.correct.length)]);
       setPupilOffset({ x: 0, y: 0 });

    } else if (expression === MascotExpression.OOPS) {
       setInternalBubble(DIALOGUES.incorrect[Math.floor(Math.random() * DIALOGUES.incorrect.length)]);
       setPupilOffset({ x: 0, y: 4 });

    } else if (expression === MascotExpression.THINKING) {
       setInternalBubble(DIALOGUES.thinking[Math.floor(Math.random() * DIALOGUES.thinking.length)]);
       setPupilOffset({ x: 0, y: -5 });
    }
  }, [expression]);

  const handleTickle = useCallback(() => {
    if (isTickled) return;
    setIsTickled(true);
    const msg = DIALOGUES.tickle[Math.floor(Math.random() * DIALOGUES.tickle.length)];
    setInternalBubble(msg);
    if (onTickle) onTickle();
    setTimeout(() => setIsTickled(false), 800);
  }, [onTickle, isTickled]);

  const activeBubble = externalBubble || internalBubble;

  // --- RENDERING HELPERS ---

  const renderEyes = () => {
    if (expression === MascotExpression.HAPPY || isTickled) {
      return (
        <g stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M55,85 Q70,70 85,85" />
          <path d="M115,85 Q130,70 145,85" />
        </g>
      );
    }
    
    if (expression === MascotExpression.OOPS) {
      return (
        <g stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M60,80 L80,88" />
          <path d="M60,88 L80,80" />
          <path d="M120,80 L140,88" />
          <path d="M120,88 L140,80" />
        </g>
      );
    }

    return (
      <g className={expression === MascotExpression.IDLE ? "owl-blink" : ""}>
        {/* Whites */}
        <circle cx="70" cy="85" r="24" fill="white" />
        <circle cx="130" cy="85" r="24" fill="white" />
        
        {/* Pupils */}
        <g style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`, transition: 'transform 0.5s ease-out' }}>
          <circle cx="70" cy="85" r="10" fill="#1e293b" />
          <circle cx="130" cy="85" r="10" fill="#1e293b" />
          <circle cx="74" cy="82" r="3" fill="white" opacity="0.8" />
          <circle cx="134" cy="82" r="3" fill="white" opacity="0.8" />
        </g>

        {/* Eyelids (Thinking) */}
        {expression === MascotExpression.THINKING && (
          <g fill="#cbd5e1">
             <rect x="46" y="61" width="48" height="24" />
             <rect x="106" y="61" width="48" height="24" />
          </g>
        )}
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 relative z-10">
      
      {/* --- SPEECH BUBBLE --- */}
      <div className={`transition-all duration-500 transform ${activeBubble ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4'} mb-4`}>
        <div className="bg-white border-2 border-indigo-500 text-indigo-900 px-5 py-3 rounded-2xl shadow-lg max-w-xs text-center relative">
          <p className="font-bold text-sm md:text-base">{activeBubble}</p>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-indigo-500 transform rotate-45"></div>
        </div>
      </div>

      {/* --- DR. OUGHT MASCOT --- */}
      <div 
        onClick={handleTickle}
        className={`
          relative w-56 h-64 md:w-72 md:h-80 cursor-pointer 
          transition-all duration-200
          ${isTickled ? 'owl-wiggle' : ''}
          ${expression === MascotExpression.HAPPY ? 'owl-pop' : ''}
        `}
      >
        <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-xl">
          
          {/* --- TREE BRANCH (Static Base) --- */}
          <g transform="translate(0, 10)">
             {/* Main Branch */}
             <path d="M10,210 Q100,225 190,205" stroke="#78350f" strokeWidth="12" strokeLinecap="round" fill="none" />
             
             {/* Small Twig */}
             <path d="M150,210 Q160,195 175,190" stroke="#78350f" strokeWidth="6" strokeLinecap="round" fill="none" />
             
             {/* Leaves */}
             <g className="leaf-sway">
               <path d="M175,190 Q185,170 195,190 Q185,200 175,190" fill="#16a34a" />
               <path d="M175,190 Q165,175 160,195 Q170,200 175,190" fill="#16a34a" />
             </g>
          </g>

          {/* --- THE OWL (Floating) --- */}
          <g className="owl-float">
             
            {/* Feet (Orange Pills) - Positioned to grip the curved branch */}
            <rect x="85" y="195" width="10" height="15" rx="5" fill="#fbbf24" />
            <rect x="105" y="195" width="10" height="15" rx="5" fill="#fbbf24" />

            {/* Wings (Behind Body) */}
            <ellipse cx="40" cy="130" rx="20" ry="35" fill="#475569" transform="rotate(-15 40 130)" className={isTickled ? 'wing-flap-l' : ''} />
            <ellipse cx="160" cy="130" rx="20" ry="35" fill="#475569" transform="rotate(15 160 130)" className={isTickled ? 'wing-flap-r' : ''}/>

            {/* Body */}
            <rect x="40" y="40" width="120" height="165" rx="60" fill="#475569" />
            
            {/* Belly */}
            <circle cx="100" cy="135" r="45" fill="#94a3b8" opacity="0.3" />

            {/* Ears */}
            <path d="M45,60 L35,30 L65,50 Z" fill="#475569" />
            <path d="M155,60 L165,30 L135,50 Z" fill="#475569" />

            {renderEyes()}

            {/* Beak */}
            <path d="M95,105 L105,105 L100,115 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />

            {/* --- ACCESSORIES --- */}

            {/* Glasses */}
            <g stroke="#fbbf24" strokeWidth="3" fill="none">
              <circle cx="70" cy="85" r="28" />
              <circle cx="130" cy="85" r="28" />
              <line x1="98" y1="85" x2="102" y2="85" />
            </g>

            {/* Red Bowtie */}
            <g fill="#ef4444" transform="translate(100, 165)">
              <path d="M0,0 L-15,-10 L-15,10 Z" />
              <path d="M0,0 L15,-10 L15,10 Z" />
              <circle cx="0" cy="0" r="3" fill="#b91c1c" />
            </g>

            {/* Graduation Cap */}
            <g transform={`translate(0, ${isTickled ? -8 : 0}) transition-transform`}>
              <path d="M60,35 L100,20 L140,35 L100,50 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
              <path d="M75,40 Q100,55 125,40 L125,35 L75,35 Z" fill="#1e293b" />
              <path d="M100,35 Q120,35 130,55" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="130" cy="55" r="3" fill="#fbbf24" />
            </g>
          </g>

        </svg>
      </div>
    </div>
  );
};

export default DrOught;