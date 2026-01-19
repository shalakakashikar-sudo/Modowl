import { ModalUnit } from '../../types';

export const SHOULD: ModalUnit = {
  id: 'should',
  name: 'SHOULD',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "It's a good idea / It's the right thing to do / I expect it",
  
  meanings: [
    'Advice & Recommendation', 
    'Logical Expectation', 
    'Mild Obligation', 
    'Past Regret (Should have)'
  ],
  
  functions: [
    'Giving Advice (Universal)',
    'Expressing Expectations',
    'Moral or Social Duty',
    'Expressing Regret or Criticism'
  ],

  rules: [
    '✅ The standard word for giving advice (Stronger than "Could", softer than "Must")',
    '✅ Use for logical predictions (e.g., "It should work")',
    '✅ Use "Should have + Past Participle" to talk about past mistakes',
    '❌ Never use "to" after "Should"',
    '❌ Never add "s" (No "He shoulds")'
  ],

  examples: [
    { 
      sentence: "You should see a doctor about that cough.", 
      context: "Advice - A strong recommendation for someone's benefit."
    },
    { 
      sentence: "The package should arrive by noon.", 
      context: "Expectation - Based on the schedule, I expect this to happen."
    },
    { 
      sentence: "I should have listened to you.", 
      context: "Regret (Past) - I didn't listen in the past, and now I wish I had."
    },
    { 
      sentence: "You should thank him for the gift.", 
      context: "Social Duty - It is the polite and proper thing to do."
    }
  ],

  commonMistakes: [
    "Error: 'I should to go home.' -> Correction: 'I should go home.' (Reason: Unlike 'Ought to', 'Should' never takes 'to'.)",
    "Error: 'He shoulds study more.' -> Correction: 'He should study more.' (Reason: Modals never change form.)",
    "Error: 'You should of called me.' -> Correction: 'You should have called me.' (Reason: Common phonetic mistake; it is always 'have'.)"
  ],

  contrastNotes: "SHOULD vs COULD vs MUST: COULD = Suggestion (Gentle). SHOULD = Advice (Stronger). MUST = Command (Strongest). Tip: The Regret Test: Can you say 'I wish I had done it'? If yes, use 'Should have'.",

  wisdom: "Hoo! 'Should' is the voice of a good friend. It doesn't force you (like Must), but it strongly points to the wise path.",
  
  // Theme
  strength: 70, // Strong advice
  colorTheme: "from-amber-500 to-orange-600", // "Guidance/Light" colors
  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" // Lightbulb (Idea/Advice)
};