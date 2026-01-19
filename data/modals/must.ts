import { ModalUnit } from '../../types';

export const MUST: ModalUnit = {
  id: 'must',
  name: 'MUST',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "You have no choice / I'm absolutely sure / Forbidden (Must not)",
  
  meanings: [
    'Strong Obligation', 
    'Logical Deduction (95% Certainty)', 
    'Prohibition (Negative)', 
    'Urgent Necessity'
  ],
  
  functions: [
    'Enforcing Rules & Laws',
    'Drawing Logical Conclusions',
    'Expressing Prohibition',
    'Giving Doctor\'s Orders',
    'Expressing Warm/Strong Invitations'
  ],

  rules: [
    '✅ Use for non-negotiable rules or laws',
    '✅ Use for logical certainty (e.g., "The lights are on, he must be home")',
    '✅ Negative "Must NOT" means forbidden (Do not do it!)',
    '❌ Do NOT use "Must" for negative deduction (Use "Can\'t" e.g., "He can\'t be rich")',
    '❌ Do NOT use "Must" for past tense (Use "Had to")'
  ],

  examples: [
    { 
      sentence: "All passengers must wear seatbelts.", 
      context: "Strict Rule/Law - A non-negotiable safety requirement."
    },
    { 
      sentence: "You've been working all day; you must be tired.", 
      context: "Logical Deduction - I am almost certain of this based on evidence."
    },
    { 
      sentence: "You must not tell anyone my secret.", 
      context: "Prohibition - It is forbidden to speak about this."
    },
    { 
      sentence: "You must come and visit us soon!", 
      context: "Warm Invitation - Used socially to show you really want someone to come (not a literal order)."
    }
  ],

  // FROM GUIDE: The Critical Difference Section
  commonMistakes: [
    "Error: 'You don't must go.' -> Correction: 'You don't have to go.' (Reason: To say 'It is not necessary', use 'don't have to'. 'Must not' means it is forbidden.)",
    "Error: 'He must not be home (Logic).' -> Correction: 'He can't be home.' (Reason: For logical impossibility, use 'Can't'.)",
    "Error: 'Yesterday I must go to the bank.' -> Correction: 'Yesterday I had to go...' (Reason: 'Must' has no past form. Use 'Had to'.)"
  ],

  contrastNotes: "MUST vs HAVE TO vs SHOULD: MUST (Internal/Authority) vs HAVE TO (External Rule). SHOULD is just advice. Tip: The Choice Test: If you have a choice, use SHOULD. If you have no choice, use MUST or HAVE TO.",

  wisdom: "Hoo! 'Must' is the gavel of grammar. It allows no escape! Use it for laws, strong logic, or when you are the boss.",
  
  // Theme
  strength: 95, // Highest certainty/Obligation
  colorTheme: "from-rose-600 to-red-800", // "Stop/Warning" colors
  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" // Lock icon (Fixed/Required)
};