import { ModalUnit } from '../../types';

export const NEED: ModalUnit = {
  id: 'need',
  name: 'NEED',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "It's necessary / Something requires this / (Negative) Freedom from obligation",
  
  meanings: [
    'Practical Necessity', 
    'Absence of Obligation (Need not)', 
    'Urgent Requirement', 
    'Semi-Modal Usage'
  ],
  
  functions: [
    'Expressing practical needs',
    'Saying something is unnecessary (You needn\'t)',
    'Asking about necessity (Need I?)',
    'Giving strong advice (You need to...)'
  ],

  rules: [
    '⚠️ "Need" is a Semi-Modal: It has two personalities.',
    '✅ Modal Personality: Used mostly in Negative/Questions ("You needn\'t go", "Need I go?"). No "to".',
    '✅ Main Verb Personality: Used in Positive statements ("I need to go"). Takes "to" and "do/does".',
    '✅ "Needn\'t" = "Don\'t have to" (It is not required)',
    '❌ Do NOT use "Need" as a modal in positive statements (e.g., "He need go" is wrong; say "He needs to go")'
  ],

  examples: [
    { 
      sentence: "You need to study harder.", 
      context: "Practical Necessity - Common way to give advice that is necessary for success."
    },
    { 
      sentence: "You needn't worry about the cost.", 
      context: "Absence of Obligation - Formal/British way of saying 'You don't have to worry'."
    },
    { 
      sentence: "We need to leave now.", 
      context: "Urgency - External circumstances require this action immediately."
    },
    { 
      sentence: "Need I say more?", 
      context: "Rhetorical Question - A common phrase meaning 'Is it necessary for me to continue?'"
    }
  ],

  commonMistakes: [
    "Error: 'He need to go.' -> Correction: 'He needs to go.' (Reason: In positive sentences, 'Need' acts like a normal verb.)",
    "Error: 'You need not to wait.' -> Correction: 'You needn't wait.' (Reason: When acting as a negative modal, never use 'to'.)",
    "Error: 'Do I need go?' -> Correction: 'Do I need to go?' (Reason: If you use 'Do', 'Need' is a main verb and requires 'to'.)"
  ],

  contrastNotes: "NEED TO vs MUST vs HAVE TO: MUST = Authority/Rule. HAVE TO = External Force. NEED TO = Practical Requirement. Tip: The Survival Test: If you don't do it, will something fail? If yes, use 'Need to'.",

  wisdom: "Hoo! 'Need' is tricky. In the positive, it's just a normal verb (Need to). But in the negative, it becomes a Modal (Needn't)! It loves to change its feathers.",
  
  // Theme
  strength: 55, // Moderate necessity
  colorTheme: "from-orange-500 to-amber-600", // "Alert/Requirement" colors
  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Checkmark (Requirement Met)
};