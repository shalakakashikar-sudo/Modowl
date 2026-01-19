import { ModalUnit } from '../../types';

export const WILL: ModalUnit = {
  id: 'will',
  name: 'WILL',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "It's going to happen / I promise / I just decided now",
  
  meanings: [
    'Future Certainty', 
    'Promise / Commitment', 
    'Instant Decision', 
    'Refusal (Won\'t)', 
    'Prediction'
  ],
  
  functions: [
    'Expressing Voluntary Actions',
    'Making Promises',
    'Making Predictions based on belief',
    'Reacting spontaneously (The phone is ringing)',
    'Expressing refusal (The door won\'t open)'
  ],

  rules: [
    '✅ Use for decisions made AT THE MOMENT of speaking',
    '✅ Use "Won\'t" for refusals (e.g., "The car won\'t start")',
    '✅ Contractions are standard in speech ("I\'ll", "We\'ll")',
    '❌ Do not confuse with "Going to" (Plans made BEFORE speaking)',
    '❌ Never combine with another modal (No "I will can")'
  ],

  examples: [
    { 
      sentence: "I'll answer the phone!", 
      context: "Instant Decision - I didn't plan this before; I decided right now because it rang."
    },
    { 
      sentence: "I will never forget this kindness.", 
      context: "Strong Promise - A deep commitment, often used in vows or serious pledges."
    },
    { 
      sentence: "The car won't start.", 
      context: "Refusal (Object) - We treat the car like a stubborn person refusing to work."
    },
    { 
      sentence: "It will rain tomorrow.", 
      context: "Prediction - A statement about the future."
    }
  ],

  commonMistakes: [
    "Error: 'I will can do it.' -> Correction: 'I will be able to do it.' (Reason: Double Modal Error. Use 'be able to' for the future of ability.)",
    "Error: 'Look at those clouds! It will rain.' -> Correction: 'It's going to rain.' (Reason: When you have physical evidence, 'Going to' is better.)",
    "Error: 'I will visit him yesterday.' -> Correction: 'I visited him.' (Reason: 'Will' is strictly future. The past form is 'Would'.)"
  ],

  contrastNotes: "WILL vs GOING TO: WILL = I decide now (Spontaneous). GOING TO = I decided before (Plan). Tip: The Sandwich Test: 'I'm hungry, I'll make a sandwich' (Decided now). 'I bought bread because I'm going to make a sandwich' (Planned).",

  wisdom: "Hoo! 'Will' is the bridge to the future. It is confident and decisive. But remember: if you planned it yesterday, use 'Going to' instead!",
  
  // Theme
  strength: 85, // High certainty
  colorTheme: "from-sky-500 to-blue-600", // "Future/Sky" colors
  icon: "M13 10V3L4 14h7v7l9-11h-7z" // Lightning bolt (Energy/Action)
};