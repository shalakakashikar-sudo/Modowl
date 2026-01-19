import { ModalUnit } from '../../types';

export const MAY: ModalUnit = {
  id: 'may',
  name: 'MAY',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "You have permission (formal) / It's a 50-50 chance",
  
  meanings: [
    'Formal Permission', 
    'Balanced Possibility (50%)', 
    'Official/Legal Right', 
    'Wishes & Blessings'
  ],
  
  functions: [
    'Requesting Permission (Formal)',
    'Granting Official Permission',
    'Expressing Future Possibility',
    'Expressing Hopes (Religious/Formal)'
  ],

  rules: [
    '✅ Use for FORMAL permission (Teachers, Bosses, Strangers)',
    '✅ Use when you are roughly 50% sure something will happen',
    '✅ Invert for requests: "May I...?" (Standard polite form)',
    '❌ Never abbreviate the negative (Say "May not", avoid "Mayn\'t")',
    '❌ Never use with another modal (No "May will")'
  ],

  examples: [
    { 
      sentence: "May I come in, Sir?", 
      context: "Formal Request - The standard respectful way to enter a classroom or office."
    },
    { 
      sentence: "Candidates may use calculators.", 
      context: "Official Permission - Used in rules and regulations to show what is allowed."
    },
    { 
      sentence: "It may snow tomorrow.", 
      context: "50% Probability - There is a solid chance, but it's not certain."
    },
    { 
      sentence: "May God bless you.", 
      context: "Wishes/Blessings - Used in prayers or formal toasts."
    }
  ],

  commonMistakes: [
    "Error: 'I may will go to the shop.' -> Correction: 'I may go / I will go.' (Reason: Double Modal Error: You cannot combine 'may' (possibility) and 'will' (future).)",
    "Error: 'Can I come in? (In a strict school)' -> Correction: 'May I come in?' (Reason: Some teachers distinguish 'Can' (Ability) vs 'May' (Permission).)",
    "Error: 'He mays be late.' -> Correction: 'He may be late.' (Reason: Modals never take an 's', even for he/she/it.)"
  ],

  contrastNotes: "MAY vs MIGHT: MAY is 50% likely (neutral). MIGHT is less than 50% (doubtful/remote). Tip: The Coin Toss Rule: If it feels like a coin toss (Heads/Tails), use MAY. If it feels unlikely, use MIGHT.",

  wisdom: "Hoo! 'May' is my favorite. It is polite, respectful, and balanced. It is the top hat of grammar—wear it when you want to impress!",
  
  // Theme
  strength: 50, // Perfectly balanced probability
  colorTheme: "from-teal-500 to-emerald-600", // "Balanced/Calm" colors
  icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" // Sun (Weather/Possibility)
};