import { ModalUnit } from '../../types';

export const SHALL: ModalUnit = {
  id: 'shall',
  name: 'SHALL',
  // FROM GUIDE: Quick Memory Definition
  quickDefinition: "Let's do it together? (British) / You must (Legal/Bible)",
  
  meanings: [
    'Polite Suggestion (I/We)', 
    'Offer of Service', 
    'Legal Obligation', 
    'Formal Future (Determination)'
  ],
  
  functions: [
    'Making Suggestions ("Shall we?")',
    'Offering Help ("Shall I?")',
    'Enforcing Legal Rules',
    'Expressing Determination ("We shall overcome")'
  ],

  rules: [
    '✅ Use mainly with "I" and "We" in questions (e.g., "Shall we go?")',
    '✅ Use in legal documents to mean "MUST" (e.g., "The user shall pay...")',
    '❌ Avoid in casual American speech (Use "Should" or "Want to")',
    '❌ Avoid in statements unless you want to sound like a King or a Lawyer'
  ],

  examples: [
    { 
      sentence: "Shall we dance?", 
      context: "Polite Suggestion - A classic, charming way to suggest an activity together."
    },
    { 
      sentence: "Shall I carry your bags?", 
      context: "Offer of Help - Very polite way to offer service (Standard in hospitality)."
    },
    { 
      sentence: "The tenant shall pay rent by the 1st.", 
      context: "Legal Obligation - In contracts, 'shall' is not a suggestion; it is a binding rule."
    },
    { 
      sentence: "We shall never surrender.", 
      context: "Formal Determination - Famous historical use showing absolute resolve."
    }
  ],

  commonMistakes: [
    "Error: 'Shall he come?' -> Correction: 'Should he come?' (Reason: 'Shall' is rarely used with He/She/It/You in questions.)",
    "Error: 'We shall go to the movies. (Casual)' -> Correction: 'We are going to / We'll go.' (Reason: Using 'Shall' in casual statements sounds old-fashioned.)"
  ],

  contrastNotes: "SHALL vs WILL vs SHOULD: WILL is for prediction/promise. SHOULD is for advice. SHALL is for polite suggestions or legal commands. Tip: The 'Let's' Test: If you can replace it with 'Let's...', use SHALL WE.",

  wisdom: "Hoo! 'Shall' is a royal bird. It loves to ask 'Shall we?' in Britain, but in America, it usually only lives in lawyer's briefcases.",
  
  // Theme
  strength: 65, // Formal suggestion
  colorTheme: "from-violet-500 to-purple-600", // "Royal/Legal" colors
  icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" // Dialogue bubble (Suggestion)
};