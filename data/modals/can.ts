
import { ModalUnit } from '../../types';

export const CAN: ModalUnit = {
  id: 'can',
  name: 'CAN',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "I'm able to do it / It's possible / You're allowed (casual)",
  
  // Expanded based on "Meanings & Usage" section
  meanings: [
    'Ability (Physical/Mental)', 
    'General Possibility', 
    'Informal Permission', 
    'Offers & Requests'
  ],
  
  functions: [
    'Expressing Mental Ability',
    'Expressing Physical Ability',
    'Granting Casual Permission',
    'Stating General Truths',
    'Making Casual Offers'
  ],

  // Refined using "The Golden Rules"
  rules: [
    '✅ Always use the base form (e.g., "She can swim", not "swims")',
    '✅ Invert for questions (e.g., "Can you...?", not "Do you can...?")',
    '✅ Negative form is one word: "Cannot" (or "Can\'t")',
    '❌ Never follow with "to" (e.g., "I can go", NOT "I can to go")',
    '❌ No future/past tense form (Use "be able to" instead)'
  ],

  // Richer examples with specific "Contextual Notes" from the guide
  examples: [
    { 
      sentence: "I can speak three languages.", 
      context: "Mental Ability"
    },
    { 
      sentence: "My grandmother can still walk without help.", 
      context: "Physical Ability"
    },
    { 
      sentence: "Can I borrow your book?", 
      context: "Informal Permission"
    },
    { 
      sentence: "Temperatures can drop below zero here.", 
      context: "General Possibility"
    },
    { 
      sentence: "I can give you a ride home.", 
      context: "Offering"
    }
  ],

  // FROM GUIDE: "Common Student Mistakes" - Flattened to strings to match interface
  commonMistakes: [
    "She can swims. (Correction: She can swim. Reason: No -s on modals)",
    "I will can help you. (Correction: I will be able to help. Reason: Don't mix modals)",
    "Do you can help me? (Correction: Can you help me? Reason: Invert subject/modal)"
  ],

  // From Dr. Ought's Persona applied to the "Wisdom"
  wisdom: "Hoo! 'Can' is the muscle of grammar. It shows power and ability! But be careful—just because you *can* do something doesn't always mean you *may*. Check your politeness level!",
  
  // Theme
  strength: 40,
  colorTheme: "from-sky-400 to-blue-600",
  icon: "M13 10V3L4 14h7v7l9-11h-7z"
};
