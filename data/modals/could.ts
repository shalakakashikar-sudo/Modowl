import { ModalUnit } from '../../types';

export const COULD: ModalUnit = {
  id: 'could',
  name: 'COULD',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "I was able to (past) / Please help me (polite) / Maybe it's possible",
  
  meanings: [
    'Past Ability', 
    'Polite Request', 
    'Theoretical Possibility', 
    'Suggestion'
  ],
  
  functions: [
    'Expressing Past General Ability',
    'Making Polite Requests',
    'Making Tentative Suggestions',
    'Expressing Theoretical Possibility'
  ],

  rules: [
    '✅ Use for GENERAL ability in the past (e.g., "I could swim when I was 5")',
    '✅ Use for polite requests (Softer and more formal than "Can")',
    '✅ Follow with base verb (e.g., "Could go", not "Could went")',
    '❌ Do NOT use for specific past achievements (Use "was able to" instead)'
  ],

  examples: [
    { 
      sentence: "When I was young, I could run fast.", 
      context: "Past General Ability - A skill I possessed over a period of time in the past."
    },
    { 
      sentence: "Could you possibly lend me your notes?", 
      context: "Very Polite Request - Using 'Could' makes the request sound optional and respectful."
    },
    { 
      sentence: "This could be the solution we need.", 
      context: "Theoretical Possibility - It is possible in theory, though not certain."
    },
    { 
      sentence: "We could watch a movie if you're tired.", 
      context: "Gentle Suggestion - Offering an option without forcing it."
    }
  ],

  // FROM GUIDE: Special focus on "General vs Specific" and "Indirectness"
  commonMistakes: [
    "Error: 'I lost my keys, but I could find them.' -> Correction: 'I was able to find them.' (Reason: For a specific successful action in the past, use 'was able to', not 'could'.)",
    "Error: 'Do you could help me?' -> Correction: 'Could you help me?' (Reason: Never use auxiliary verbs like 'Do' with modals.)",
    "Error: 'I could to swim.' -> Correction: 'I could swim.' (Reason: Never use 'to' after modals.)"
  ],

  contrastNotes: "COULD vs WAS ABLE TO: 'Could' is for general past skills (I could paint). 'Was able to' is for one-time successes (I was able to fix the car yesterday). Tip: The Success Test: Did it happen once at a specific time? Use 'Was able to'.",

  wisdom: "Hoo! 'Could' is the gentleman of grammar. It wears a tuxedo. Use it when you want to be polite or when talking about skills you used to have in the 'old days'.",
  
  // Theme
  strength: 30, // Softer than 'Can' (30%)
  colorTheme: "from-indigo-400 to-purple-500", // "Royalty/Polite" colors
  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" // Clock icon (Past time)
};