import { ModalUnit } from '../../types';

export const WOULD: ModalUnit = {
  id: 'would',
  name: 'WOULD',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "Please (very polite) / I used to do this (past habit) / If only...",
  
  meanings: [
    'Polite Request/Offer', 
    'Past Habit', 
    'Hypothetical Situation', 
    'Preference (Would rather)'
  ],
  
  functions: [
    'Making extremely polite requests',
    'Describing repeated past actions (Nostalgia)',
    'Talking about imaginary situations (Conditionals)',
    'Expressing preferences ("I would like...")'
  ],

  rules: [
    '✅ Use "Would you like..." for offers (Standard politeness)',
    '✅ Use "Would" for repeated past actions (e.g., "We would play every Sunday")',
    '✅ Use in "If" sentences (Type 2 Conditional: "If I were rich, I would travel")',
    '❌ Do not use "Would" for past STATES (Use "Used to" for states like "I used to live here")',
    '❌ Never combine with "Can" (No "I would can")'
  ],

  examples: [
    { 
      sentence: "Would you mind closing the window?", 
      context: "Very Polite Request - Using 'Would you mind' is the softest, most respectful way to ask."
    },
    { 
      sentence: "When I was a child, my father would read to me.", 
      context: "Past Habit - Describes a repeated action in the past that no longer happens."
    },
    { 
      sentence: "If I had time, I would help you.", 
      context: "Hypothetical (Conditional) - Imaginary situation: I don't have time, so I won't help."
    },
    { 
      sentence: "I would rather stay home tonight.", 
      context: "Preference - A polite way to state what you want to do."
    }
  ],

  commonMistakes: [
    "Error: 'I would can help you.' -> Correction: 'I would be able to help you.' (Reason: Double Modal Error. Use 'be able to'.)",
    "Error: 'Would you mind to open the door?' -> Correction: 'Would you mind opening the door?' (Reason: Use the -ing form after 'Would you mind'.)",
    "Error: 'I would have a dog when I was young.' -> Correction: 'I used to have a dog.' (Reason: For states, use 'Used to', not 'Would'.)"
  ],

  contrastNotes: "WOULD vs USED TO: Both describe the past. BUT: 'Used to' works for states. 'Would' ONLY works for actions. Tip: The State Test: Can you 'do' it repeatedly? If no (like 'living in Paris'), use 'Used to'.",

  wisdom: "Hoo! 'Would' is Will wearing a tuxedo. It turns a demand ('I want') into a wish ('I would like'). Use it to open doors gently.",
  
  // Theme
  strength: 75, // Strong intent, but soft delivery
  colorTheme: "from-indigo-500 to-blue-700", // "Deep/Sophisticated" colors
  icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" // Gift icon (Offer)
};