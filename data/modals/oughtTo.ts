import { ModalUnit } from '../../types';

export const OUGHT_TO: ModalUnit = {
  id: 'ought-to',
  name: 'OUGHT TO',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "You really should (formal/moral duty)",
  
  meanings: [
    'Moral Obligation', 
    'Strong Advice', 
    'Logical Expectation'
  ],
  
  functions: [
    'Expressing Moral Duty',
    'Giving Formal Recommendations',
    'Stating Probability based on Logic'
  ],

  rules: [
    '✅ The ONLY core modal that is always followed by "to"',
    '✅ Interchangeable with "Should" (but sounds more formal/objective)',
    '✅ Use for ethical or moral duties (What is "right" to do)',
    '⚠️ Rarely used in Questions or Negatives (Sounds very old-fashioned; use "Should" instead)'
  ],

  examples: [
    { 
      sentence: "We ought to respect our elders.", 
      context: "Moral Duty - A standard ethical expectation in many cultures."
    },
    { 
      sentence: "You ought to apologize.", 
      context: "Right Thing To Do - It is not a law, but it is the morally correct action."
    },
    { 
      sentence: "The train ought to be here by now.", 
      context: "Expectation - Based on the schedule/logic, it is expected."
    }
  ],

  commonMistakes: [
    "Error: 'He ought go.' -> Correction: 'He ought to go.' (Reason: You can never drop the 'to' with Ought.)",
    "Error: 'You don't ought to do that.' -> Correction: 'You shouldn't do that.' (Reason: The negative form is clumsy; prefer 'Shouldn't'.)",
    "Error: 'He oughts to help.' -> Correction: 'He ought to help.' (Reason: Modals never take an 's'.)"
  ],

  contrastNotes: "OUGHT TO vs SHOULD: They are 90% interchangeable. OUGHT TO is more objective (moral law), SHOULD is subjective (good idea). Tip: The Duty Test: If you can add 'It is your duty to...', OUGHT TO fits perfectly.",

  wisdom: "Hoo! My namesake! 'Ought to' is the wise grandfather of 'Should'. It doesn't just give advice; it points to what is right and true.",
  
  // Theme
  strength: 72, // Stronger than should, weaker than must
  colorTheme: "from-fuchsia-500 to-pink-600", // "Wisdom/Moral" colors
  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.754 18 18.168 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" // Book icon (Moral Law)
};