import { ModalUnit } from '../../types';

export const BE_ABLE_TO: ModalUnit = {
  id: 'be-able-to',
  name: 'BE ABLE TO',
  quickDefinition: "Ability in any tense (Future, Past, Perfect).",
  meanings: [
    'Ability (General)', 
    'Specific Achievement (Past)', 
    'Future Ability'
  ],
  functions: [
    'Replacing "Can" in future/perfect tenses',
    'Describing difficult achievements',
    'Formal expression of ability'
  ],
  rules: [
    '✅ Use this when you need a Future tense ("I will be able to")',
    '✅ Use this when you need a Perfect tense ("I have been able to")',
    '✅ Use "Was able to" for specific past achievements (surviving, winning)',
    '❌ Avoid in the present tense if "Can" works (Can is faster/easier)'
  ],
  examples: [
    { 
      sentence: "I will be able to drive next year.", 
      context: "Future Ability - You cannot say 'I will can'." 
    },
    { 
      sentence: "I haven't been able to sleep lately.", 
      context: "Present Perfect - Describes an ability over a period of time up to now." 
    },
    { 
      sentence: "Despite the mud, we were able to escape.", 
      context: "Specific Achievement - We managed to do it this one time." 
    }
  ],
  commonMistakes: [
    "I will can go. (Correction: I will be able to go. Reason: Double Modal Error.)",
    "He is able to swim. (Correction: He can swim. Reason: Native speakers prefer 'Can' for simple present ability.)"
  ],
  contrastNotes: "BE ABLE TO vs CAN: Meaning is identical. CAN is for Present/General Past. BE ABLE TO is for Future, Perfect, and Specific Past. The Time Travel Rule: If you are going to the future or using 'Have/Has', you need BE ABLE TO.",
  wisdom: "Hoo! 'Can' is strong, but it cannot travel through time. 'Be able to' is the time-traveler that takes ability into the future!",
  strength: 50, 
  colorTheme: "from-cyan-600 to-blue-800",
  icon: "M13 10V3L4 14h7v7l9-11h-7z"
};