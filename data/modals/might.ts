import { ModalUnit } from '../../types';

export const MIGHT: ModalUnit = {
  id: 'might',
  name: 'MIGHT',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "Probably not, but maybe / Less than 50% chance",
  
  meanings: [
    'Low Possibility (<50%)', 
    'Tentative Suggestion', 
    'Gentle Advice', 
    'Past form of "May"'
  ],
  
  functions: [
    'Expressing Doubt',
    'Making Non-committal Plans',
    'Softening a Command/Advice',
    'Reporting Speech (Past)',
    'Expressing Annoyance (Advanced)'
  ],

  rules: [
    '✅ Use when you are mostly unsure (Less likely than "May")',
    '✅ Use "might want to" to give very gentle advice',
    '✅ Use as the past tense of "May" in reported speech',
    '❌ Do not contract the negative (Say "Might not", rarely "Mightn\'t")',
    '❌ Do not use in questions ("Might you...?" is very old-fashioned; use "Could")'
  ],

  examples: [
    { 
      sentence: "I might join you, but I have a lot of work.", 
      context: "Low Possibility - I probably won't come, but there is a small chance."
    },
    { 
      sentence: "You might want to take an umbrella.", 
      context: "Gentle Advice - A very polite way of saying 'You should take an umbrella'."
    },
    { 
      sentence: "She said she might be late.", 
      context: "Reported Speech - The past form of 'She said: I may be late'."
    },
    { 
      sentence: "You might have told me the meeting was cancelled!", 
      context: "Reproach (Annoyance) - Using 'Might have' to criticize someone for NOT doing something in the past."
    }
  ],

  commonMistakes: [
    "Error: 'I might to go.' -> Correction: 'I might go.' (Reason: Never use 'to' after a modal.)",
    "Error: 'Might you help me?' -> Correction: 'Could you help me?' (Reason: Using 'Might' in questions sounds archaic or poetic. Use 'Could' or 'Can'.)",
    "Error: 'It might rains.' -> Correction: 'It might rain.' (Reason: Modals never take an 's'.)"
  ],

  contrastNotes: "MIGHT vs MAY vs COULD: MAY = 50% chance (Coin toss). MIGHT = 20-30% chance (Doubtful). COULD = Theoretical possibility. Tip: The Umbrella Test: 'It may rain' (Take umbrella). 'It might rain' (Maybe leave it in the car).",

  wisdom: "Hoo! 'Might' is a cloudy day word. It carries no promises. Use it when you want to leave the back door open!",
  
  // Theme
  strength: 20, // Low certainty
  colorTheme: "from-gray-400 to-slate-500", // "Cloudy/Uncertain" colors
  icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.726 2.18a2 2 0 001.175 2.503l2.254.902a2 2 0 002.503-1.175l.477-1.432a2 2 0 00-.317-1.89z" // Cloud icon
};