
import { ModalUnit } from '../../types';

export const HAVE_TO: ModalUnit = {
  id: 'have-to',
  name: 'HAVE TO',
  quickDefinition: "External rules force me / No choice / 'I gotta'",
  
  meanings: [
    'External Obligation', 
    'Necessity (Circumstantial)', 
    'Requirement'
  ],
  
  functions: [
    'Expressing rules made by others (Laws/Bosses)',
    'Talking about obligations in the Past/Future',
    'Expressing reluctance ("I have to, but I don\'t want to")'
  ],

  rules: [
    '✅ Use for obligations that come from OUTSIDE you (Job, Law, School)',
    '✅ Use "Had to" for the past (Must has no past tense!)',
    '✅ Use "Will have to" for the future',
    '✅ "Don\'t have to" means it is OPTIONAL (Not forbidden)',
    '❌ Do not confuse with "Must" (Internal feeling)'
  ],

  examples: [
    { 
      sentence: "I have to wear a tie to work.", 
      context: "External Rule"
    },
    { 
      sentence: "She has to finish the report by 5 PM.", 
      context: "Deadline"
    },
    { 
      sentence: "We had to wait for two hours.", 
      context: "Past Obligation"
    },
    { 
      sentence: "You don't have to come if you're busy.", 
      context: "Lack of Obligation"
    }
  ],

  commonMistakes: [
    "I must go to the bank yesterday. (Correction: I had to go to the bank. Reason: 'Must' has no past tense. You MUST use 'Had to'.)",
    "He have to work. (Correction: He has to work. Reason: Unlike 'Must', 'Have to' changes form (I have / He has).)",
    "You mustn't do it. (Correction: You don't have to do it. Reason: 'Mustn't' = Forbidden. 'Don't have to' = Optional.)"
  ],

  contrastNotes: "HAVE TO vs MUST: HAVE TO = The rule is outside me (Law/Boss). MUST = The feeling is inside me (Urgency/Authority). Tip: The Boss Test: Did someone else tell you to do it? Use HAVE TO.",

  wisdom: "Hoo! 'Have to' is the heavy backpack of grammar. You carry it because the world tells you to, not because you want to.",
  
  strength: 90,
  colorTheme: "from-slate-600 to-gray-800",
  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
};
