import { ModalUnit } from '../../types';

export const DARE: ModalUnit = {
  id: 'dare',
  name: 'DARE',
  // Quick definition focused on the emotion
  quickDefinition: "To have the courage / To challenge someone / Outrage",
  
  meanings: [
    'Bravery/Courage', 
    'Challenge/Threat', 
    'Outrage (How dare you)', 
    'Semi-Modal Usage'
  ],
  
  functions: [
    'Expressing lack of fear',
    'Challenging someone to act',
    'Expressing shock or anger',
    'Warning about consequences'
  ],

  // "Dare" is tricky because it changes rules. I clarified the "Semi-Modal" split.
  rules: [
    '⚠️ "Dare" is a Semi-Modal: It can follow modal rules OR normal verb rules.',
    '✅ Modal Mode: "He dare not go" (No -s, No "to")',
    '✅ Normal Verb Mode: "He doesn\'t dare to go" (Uses "to", uses "does")',
    '✅ Common in Negative: "I daren\'t" (British/Formal)',
    '✅ Common in Idiom: "How dare you!" (Always modal form)'
  ],

  examples: [
    { 
      sentence: "How dare you speak to me like that!", 
      context: "Outrage - A fixed phrase used to show strong anger or shock."
    },
    { 
      sentence: "I daren't tell him the news.", 
      context: "Lack of Courage (Modal Form) - Formal/British way of saying 'I am afraid to tell him'."
    },
    { 
      sentence: "She didn't dare to look back.", 
      context: "Lack of Courage (Main Verb Form) - Standard usage in modern/American English."
    },
    { 
      sentence: "Don't you dare touch that!", 
      context: "Strong Warning - A threat implying bad consequences if you disobey."
    }
  ],

  // Highlighting the confusion between "He dares" and "He dare"
  commonMistakes: [
    "Error: 'He dare not to come.' -> Correction: 'He dare not come.' (Reason: If you use 'Dare' as a modal, do NOT use 'to'.)",
    "Error: 'He dares not come.' -> Correction: 'He does not dare to come.' (Reason: If you use 'dares', you must use 'does' and 'to'.)",
    "Error: 'Dares he go?' -> Correction: 'Dare he go?' (Reason: In questions: 'Dare he' (Modal) or 'Does he dare' (Normal).)"
  ],

  contrastNotes: "DARE vs CHALLENGE: 'Dare' implies a risk or fear. 'Challenge' is a neutral invitation to compete. Tip: Semi-Modal Check: Can you replace it with 'is brave enough to'? If yes, it's Dare.",

  wisdom: "Hoo! Dare is a two-faced bird. Sometimes it acts like a modal (He dare not), sometimes like a normal verb (He doesn't dare). It is the 'Rebel' of grammar!",
  
  // Theme
  strength: 60, // Intense emotion
  colorTheme: "from-red-600 to-rose-800", // "Danger/Courage" colors
  icon: "M13 10V3L4 14h7v7l9-11h-7z" // Lightning bolt fits "Warning/Strike"
};