import { ModalUnit } from '../../types';

export const USED_TO: ModalUnit = {
  id: 'used-to',
  name: 'USED TO',
  quickDefinition: "Past habits or states that are no longer true.",
  meanings: [
    'Past Habit (Repeated Action)', 
    'Past State (Situation/Feeling)', 
    'Discontinued Reality'
  ],
  functions: [
    'Describing things that changed',
    'Contrasting past and present',
    'Storytelling about "the old days"'
  ],
  rules: [
    '✅ Use for actions that happened regularly in the past but stopped',
    '✅ Use for STATES (living, feeling, being) in the past (Would cannot do this!)',
    '✅ Negative form is "Didn\'t use to" (Drop the \'d\')',
    '❌ Do not confuse with "Be used to" (Being accustomed to something)'
  ],
  examples: [
    { 
      sentence: "I used to live in Mumbai.", 
      context: "Past State - A situation that was true in the past but isn't now." 
    },
    { 
      sentence: "We used to play cricket every evening.", 
      context: "Past Habit - A repeated action." 
    },
    { 
      sentence: "I didn't use to like spicy food.", 
      context: "Changed Preference - Note the spelling: 'Didn't USE to'." 
    }
  ],
  commonMistakes: [
    "I used to go to the park tomorrow. (Correction: I am going to the park. Reason: 'Used to' is strictly for the PAST.)",
    "I use to wake up early. (Correction: I usually wake up early / I used to wake up early. Reason: There is no present tense 'use to'.)",
    "I didn't used to smoke. (Correction: I didn't use to smoke. Reason: 'didn't' already carries the past tense.)"
  ],
  contrastNotes: "USED TO vs WOULD: USED TO works for everything (States & Actions). WOULD only works for Actions. The Static Test: Can you physically 'do' it? If no (like 'knowing', 'believing', 'living'), you MUST use USED TO.",
  wisdom: "Hoo! 'Used to' is the historian. It tells us how things were, and reminds us that things have changed.",
  strength: 60, 
  colorTheme: "from-amber-700 to-yellow-900",
  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
};