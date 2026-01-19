
import { ModalUnit } from '../../types';

export const HAD_BETTER: ModalUnit = {
  id: 'had-better',
  name: 'HAD BETTER',
  quickDefinition: "Strong advice with a warning / Do it or else!",
  
  meanings: [
    'Strong Advice', 
    'Warning / Threat', 
    'Urgent Necessity'
  ],
  
  functions: [
    'Giving advice to prevent disaster',
    'Warning someone of bad consequences',
    'Expressing urgency (immediate future)'
  ],

  rules: [
    '✅ Stronger than "Should" (Implies negative consequences)',
    '✅ ALWAYS refers to the immediate future (Never the past!)',
    '✅ Commonly contracted to "\'d better" (e.g., "You\'d better run")',
    '❌ Do not use for polite suggestions (It sounds aggressive)',
    '❌ Do not use "to" (Say "You\'d better go", NOT "You better to go")'
  ],

  examples: [
    { 
      sentence: "You had better hurry or you'll miss the train.", 
      context: "Urgent Warning"
    },
    { 
      sentence: "You'd better not lie to me.", 
      context: "Threat"
    },
    { 
      sentence: "We'd better leave now.", 
      context: "Prudence"
    }
  ],

  commonMistakes: [
    "You better go. (Correction: You'd better go / You had better go. Reason: In casual speech, people drop the 'Had', but grammatically it is required.)",
    "You had better to study. (Correction: You had better study. Reason: Never use 'to' after 'had better'.)",
    "You had better come to my party! (Correction: You must come / You should come. Reason: Using 'Had better' for an invitation sounds like a threat!)"
  ],

  contrastNotes: "HAD BETTER vs SHOULD: SHOULD = It is a good idea. HAD BETTER = Do it, or something bad happens. Tip: The 'Or Else' Test: Can you add 'or else...' at the end? If yes, use HAD BETTER.",

  wisdom: "Hoo! Careful with this one. 'Had better' has sharp claws. Use it only when there is danger or a deadline approaching!",
  
  strength: 80,
  colorTheme: "from-red-500 to-orange-700",
  icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
};
