
import { ModalUnit, QuizQuestion } from './types';

export const MODALS: ModalUnit[] = [
  {
    id: 'can',
    name: 'CAN',
    quickDefinition: "CAN = I'm able to do it / It's possible / You're allowed (casual)",
    meanings: ['Ability', 'Possibility', 'Permission (informal)'],
    functions: ['Ability', 'Casual Permission', 'General Possibility'],
    rules: [
      'Always use base form after can',
      'Never add -s, -ed, or -ing to can',
      'Form negative by adding not (cannot / can\'t)'
    ],
    examples: [
      { sentence: "I can speak three languages.", context: "Mental Ability" },
      { sentence: "It can get very cold in December.", context: "Natural Possibility" },
      { sentence: "You can borrow my book.", context: "Casual Permission" }
    ],
    commonMistakes: [
      "She can swims (Incorrect - use base form)",
      "I will can go (Incorrect - use 'will be able to')"
    ],
    wisdom: "Can shows power. Use it when you are sure of an ability!",
    strength: 40,
    // Added missing colorTheme and icon for 'can'
    colorTheme: "from-blue-500 to-indigo-600",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: 'could',
    name: 'COULD',
    quickDefinition: "COULD = I was able to (past) / Please help me (polite) / Maybe it's possible",
    meanings: ['Past ability', 'Polite request', 'Possibility', 'Suggestion'],
    functions: ['Past Ability', 'Formal Request', 'Theoretical Possibility'],
    rules: [
      'Used as the past form of can',
      'Significantly more polite than can in requests',
      'Used for general past ability'
    ],
    examples: [
      { sentence: "When I was young, I could run fast.", context: "Past Ability" },
      { sentence: "Could you please help me?", context: "Polite Request" },
      { sentence: "It could rain later.", context: "Uncertain Possibility" }
    ],
    commonMistakes: [
      "I could reached the shore (Incorrect - use 'was able to' for specific achievements)",
      "I was wondering if you can... (Could is better for professional requests)"
    ],
    wisdom: "Could is softer... like asking with respect. It's the polite way to open a door.",
    strength: 30,
    // Added missing colorTheme and icon for 'could'
    colorTheme: "from-slate-500 to-slate-700",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    id: 'may',
    name: 'MAY',
    quickDefinition: "MAY = You have permission (formal) / It's 50-50 possible",
    meanings: ['Formal permission', 'Possibility'],
    functions: ['Official Permission', '50% Future Possibility', 'Religious Blessings'],
    rules: [
      'Most formal modal for permission',
      'Used for 50/50 chances',
      'Common in legal and official language'
    ],
    examples: [
      { sentence: "Candidates may use calculators.", context: "Official Permission" },
      { sentence: "It may snow tomorrow.", context: "50% Chance" },
      { sentence: "May I use your phone?", context: "Formal Request" }
    ],
    commonMistakes: [
      "I may to go (Incorrect - no 'to' after may)",
      "Can I go to the bathroom? (Technically ability, 'May I' is for permission)"
    ],
    wisdom: "May is hopeful. It’s like a coin toss that’s exactly in the middle!",
    strength: 50,
    // Added missing colorTheme and icon for 'may'
    colorTheme: "from-emerald-500 to-teal-600",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  },
  {
    id: 'might',
    name: 'MIGHT',
    quickDefinition: "MIGHT = Probably not, but maybe / Less than 50% chance",
    meanings: ['Possibility (less certain)', 'Past of may'],
    functions: ['Low Possibility', 'Tentative Suggestion', 'Gentle Advice'],
    rules: [
      'Suggests less certainty than may',
      'Preferred for indirect communication',
      'Used to soften statements or disagreements'
    ],
    examples: [
      { sentence: "I might go to the party.", context: "Low Chance" },
      { sentence: "That might not be the best idea.", context: "Softening a Statement" },
      { sentence: "You might consider taking an umbrella.", context: "Gentle Advice" }
    ],
    commonMistakes: [
      "You might have told me! (This usage is actually for annoyance, not possibility)",
      "He mights come (No -s added)"
    ],
    wisdom: "If you're unsure, might is your safest friend. It carries no weight of promise.",
    strength: 20,
    // Added missing colorTheme and icon for 'might'
    colorTheme: "from-cyan-500 to-blue-600",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.726 2.18a2 2 0 001.175 2.503l2.254.902a2 2 0 002.503-1.175l.477-1.432a2 2 0 00-.317-1.89z"
  },
  {
    id: 'must',
    name: 'MUST',
    quickDefinition: "MUST = You have no choice / I'm absolutely sure / Never do this (must not)",
    meanings: ['Strong obligation', 'Logical deduction', 'Prohibition'],
    functions: ['Rules/Laws', 'Certain Inference', 'Strict Prohibition'],
    rules: [
      'Language of laws and regulations',
      'Strongest form of certainty (deduction)',
      'Must not means it is forbidden'
    ],
    examples: [
      { sentence: "All passengers must show their tickets.", context: "Strict Rule" },
      { sentence: "She must be tired.", context: "Logical Deduction" },
      { sentence: "You must not smoke here.", context: "Prohibition" }
    ],
    commonMistakes: [
      "I must to go (Incorrect - no 'to')",
      "You don't must worry (Incorrect - use 'don't have to' for no obligation)"
    ],
    wisdom: "Must is serious business. No escape! Use it when the path is fixed.",
    strength: 90,
    // Added missing colorTheme and icon for 'must'
    colorTheme: "from-rose-600 to-red-800",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    id: 'should',
    name: 'SHOULD',
    quickDefinition: "SHOULD = It's a good idea / It's the right thing to do / I expect it",
    meanings: ['Advice', 'Expectation', 'Mild obligation'],
    functions: ['Giving Advice', 'Expected Outcome', 'Moral Duty'],
    rules: [
      'Standard way to give advice',
      'Stronger than could but softer than must',
      'Used for regrets (should have)'
    ],
    examples: [
      { sentence: "You should see a doctor.", context: "Medical Advice" },
      { sentence: "The package should arrive tomorrow.", context: "Expectation" },
      { sentence: "I should have studied harder.", context: "Regret" }
    ],
    commonMistakes: [
      "He shoulds come (Incorrect - no -s)",
      "I should to rest (Incorrect - no 'to')"
    ],
    wisdom: "Advice sounds kinder with should. It’s wisdom, but with a gentle hand.",
    strength: 70,
    // Added missing colorTheme and icon for 'should'
    colorTheme: "from-amber-500 to-orange-600",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: 'mcq',
    question: "I ____ speak three languages fluently.",
    options: ["can", "may", "must", "might"],
    answer: "can",
    explanation: "We use 'can' to express general ability in the present.",
    modalId: "can"
  },
  {
    id: 2,
    type: 'fill',
    question: "You ____ not smoke in the hospital. (Express strong prohibition)",
    answer: "must",
    explanation: "We use 'must not' for strict prohibitions and rules.",
    modalId: "must"
  },
  {
    id: 3,
    type: 'mcq',
    question: "____ I go to the library now, teacher?",
    options: ["Can", "May", "Should", "Would"],
    answer: "May",
    explanation: "'May' is the formal and respectful choice for seeking permission in a classroom.",
    modalId: "may"
  },
  {
    id: 4,
    type: 'error',
    question: "Identify the error: 'He can swims very fast across the lake.'",
    answer: "swims",
    explanation: "After a modal like 'can', the verb must always be in its base form (swim).",
    modalId: "can"
  },
  {
    id: 5,
    type: 'mcq',
    question: "I'm not sure, but it ____ rain this evening because the sky is cloudy.",
    options: ["must", "might", "can", "will"],
    answer: "might",
    explanation: "We use 'might' for uncertain future possibilities.",
    modalId: "might"
  },
  {
    id: 6,
    type: 'meaning',
    question: "Which sentence shows a polite suggestion?",
    options: ["We must go now.", "We could watch a movie later.", "You will help me.", "He can play."],
    answer: "We could watch a movie later.",
    explanation: "'Could' is used for tentative or polite suggestions.",
    modalId: "could"
  },
  {
    id: 7,
    type: 'mcq',
    question: "You ____ revise your lessons daily to get good marks.",
    options: ["should", "could", "might", "may"],
    answer: "should",
    explanation: "'Should' is the standard modal for giving advice.",
    modalId: "should"
  },
  {
    id: 8,
    type: 'fill',
    question: "When I was five, I ____ ride a bicycle without support.",
    answer: "could",
    explanation: "'Could' is used for general ability in the past.",
    modalId: "could"
  },
  {
    id: 9,
    type: 'mcq',
    question: "The teacher said we ____ submit the assignments by Friday.",
    options: ["must", "can", "might", "could"],
    answer: "must",
    explanation: "Assignments usually have a deadline, implying an obligation (must).",
    modalId: "must"
  },
  {
    id: 10,
    type: 'meaning',
    question: "What does 'She must be at home' mean?",
    options: ["She is required to be at home", "I am sure she is at home", "She is allowed to be at home", "She wants to be at home"],
    answer: "I am sure she is at home",
    explanation: "'Must' here is used for logical deduction, meaning the speaker is quite certain.",
    modalId: "must"
  }
];

export const DIALOGUES = {
  idle: [
    "Hoo! Welcome, young grammarian. Ready to think wisely today?",
    "Modals are not rules… they are choices.",
    "Take your time. Even wisdom arrives step by step.",
    "Grammar is easier when you listen to meaning.",
    "Hoo-hoo! I’ve been waiting to explain should and must."
  ],
  tickle: [
    "Hee-hee! Did you know must is stronger than should?",
    "Can shows ability, but may shows permission. Small difference, big meaning!",
    "If you’re not sure, might is your safest friend.",
    "Would is just will wearing manners.",
    "Remember: modals never change their form. No ‘musts’ allowed!",
    "Ought to sounds polite… like a suggestion wrapped in wisdom."
  ],
  correct: [
    "Excellent! That modal fits perfectly.",
    "Hoo-ray! You chose the right strength.",
    "Wise choice! Meaning matters more than rules.",
    "Yes! That’s exactly how this modal behaves.",
    "Splendid! You’re thinking like a grammarian.",
    "Correct! Dr. Ought is proud of you."
  ],
  incorrect: [
    "Hmm… not quite. Let’s think about the meaning again.",
    "Close! But this modal sounds a little too strong.",
    "Oops! Try asking yourself how sure the speaker is.",
    "That modal doesn’t fit the situation. Let’s rethink.",
    "No worries! Even owls learn by mistakes.",
    "Shall we try once more? I believe you can."
  ],
  // Added missing thinking property to fix DrOught component error
  thinking: [
    "Hmm... let me consult the Archives of Grammar...",
    "Calculating the probability of this sentence...",
    "Searching for the most polite option...",
    "Let me weigh the necessity against the possibility...",
    "One moment, young grammarian."
  ],
  finalSuccess: [
    "Hoo-hoo! You’ve completed Modowl!",
    "You didn’t just learn modals… you understood them.",
    "Remember: grammar serves clarity, not fear.",
    "Fly confidently. Dr. Ought approves."
  ]
};
