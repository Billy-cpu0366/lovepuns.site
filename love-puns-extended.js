// love-puns-extended.js
const QUESTION_BANK = {
  "1_word": [
    {
      template: "Are you made of ______? Because I'm blinded by your beauty!",
      blanks: [{ pos: 4, answer: "sunlight" }],
      hint: "Natural element"
    },
    {
      template: "Is your name ______? Because you look like everything I've ever wanted!",
      blanks: [{ pos: 3, answer: "destiny" }],
      hint: "Abstract concept"
    }
    {
        text: "Are you a ___? Because whenever I look at you, everyone else disappears.",
        answers: ["magician"],
        blanks: 1
    },
    {
        text: "Do you have a ___? I keep getting lost in your eyes.",
        answers: ["map"],
        blanks: 1
    },
    {
        text: "Are you ___? Because you've been running through my mind all day.",
        answers: ["tired"],
        blanks: 1
    },
    {
        text: "Is your name ___? Because you're stunning.",
        answers: ["Google"],
        blanks: 1
    },
    {
        text: "Are you a ___ test? Because I want to pass.",
        answers: ["chemistry"],
        blanks: 1
    },
    {
        text: "Do you believe in ___ at first sight?",
        answers: ["love"],
        blanks: 1
    },
    {
        text: "Are you a ___ signal? Because you're giving me strong connections.",
        answers: ["wifi"],
        blanks: 1
    },
    {
        text: "Can you be my ___? I'm totally lost without direction.",
        answers: ["compass"],
        blanks: 1
    },
    {
        text: "Are you a ___? Because you light up my world.",
        answers: ["star"],
        blanks: 1
    },
    {
        text: "Do you have a ___ in your pocket? Because I see something special.",
        answers: ["mirror"],
        blanks: 1
    },
    // 这里可以继续添加更多1词题目
  ],
  "2_words": [
    {
      template: "Can I borrow your ______? I need to record how ______ looks in moonlight.",
      blanks: [
        { pos: 5, answer: "camera" },
        { pos: 9, answer: "angelic" }
      ],
      hint: "Device/Adjective"
    },
    {
      template: "If you were a ___, you'd be a ___.",
      blanks: [
        { pos: 1, answer: "vegetable" },
        { pos: 3, answer: "cute-cumber" }
      ],
      hint: "Food pun"
    }
    {
        text: "If you were a ___, you'd be a ___.",
        answers: ["vegetable", "cute-cumber"],
        blanks: 2
    },
    {
        text: "Is your name ___? Because you have ___ I've been searching for.",
        answers: ["Google", "everything"],
        blanks: 2
    },
    {
        text: "You must be a ___ because you're ___.",
        answers: ["rainbow", "colorful"],
        blanks: 2
    },
    {
        text: "Are you a ___ of ___? Because I'm falling for you.",
        answers: ["work", "art"],
        blanks: 2
    },
    {
        text: "I must be a ___ because you're ___ my world.",
        answers: ["tourist", "changing"],
        blanks: 2
    },
    {
        text: "Are you a ___ of ___? Because you're out of this world.",
        answers: ["piece", "heaven"],
        blanks: 2
    },
    {
        text: "You're like a ___ of ___. Rare and beautiful.",
        answers: ["piece", "art"],
        blanks: 2
    },
    {
        text: "I'm not a ___, but I know ___ when I see it.",
        answers: ["photographer", "beauty"],
        blanks: 2
    },
    {
        text: "Are you a ___ of ___? Because you spark something in me.",
        answers: ["burst", "sunshine"],
        blanks: 2
    },
    {
        text: "You must be a ___ ___ because you're electric.",
        answers: ["power", "source"],
        blanks: 2
    },
    // 添加更多2词题目……
  ],
  "3_words": [
    {
      template: "Are we in ______? Because this ______ feels like ______!",
      blanks: [
        { pos: 4, answer: "paradise" },
        { pos: 6, answer: "moment" },
        { pos: 9, answer: "heaven" }
      ],
      hint: "Mythical place/Noun/Emotion"
    }
    {
        text: "Are you ___? Because ___ for ___.",
        answers: ["French", "Eiffel", "you"],
        blanks: 3
    },
    {
        text: "I'm not a ___, but I know ___ when I see ___.",
        answers: ["photographer", "beauty", "it"],
        blanks: 3
    },
    {
        text: "Do you ___ in ___ at first ___? Or should I walk by again?",
        answers: ["believe", "love", "sight"],
        blanks: 3
    },
    {
        text: "Are you a ___ of ___? Because you make my ___ stop.",
        answers: ["piece", "art", "heart"],
        blanks: 3
    },
    {
        text: "I would ___ a ___ to see you ___ smile.",
        answers: ["climb", "mountain", "again"],
        blanks: 3
    },
    {
        text: "Is this ___ or did I just ___ my ___?",
        answers: ["magic", "meet", "soulmate"],
        blanks: 3
    },
    {
        text: "Could you be the ___ to my ___, solving this ___ of love?",
        answers: ["key", "lock", "puzzle"],
        blanks: 3
    },
    {
        text: "Are you a ___ in the ___ of my ___ world?",
        answers: ["light", "beautiful", "dark"],
        blanks: 3
    },
    {
        text: "Do you ___ in ___ or should I ___ again?",
        answers: ["believe", "miracles", "walk"],
        blanks: 3
    },
    {
        text: "I'm ___ to ___ that you ___ my heart.",
        answers: ["sorry", "say", "stole"],
        blanks: 3
    },
    // 添加更多3词题目……
  ],
  "4_words": [
    {
      template: "Do you believe in ______? Because when ______ meets ______, magic ______!",
      blanks: [
        { pos: 5, answer: "alchemy" },
        { pos: 7, answer: "sunlight" },
        { pos: 9, answer: "midnight" },
        { pos: 11, answer: "happens" }
      ],
      hint: "Science concept/Nature elements/Verb"
    }
    {
        text: "Are you a ___ of ___? Because you ___ my ___.",
        answers: ["piece", "art", "complete", "world"],
        blanks: 4
    },
    {
        text: "I would ___ the ___ just to ___ your ___.",
        answers: ["climb", "highest", "see", "smile"],
        blanks: 4
    },
    {
        text: "Is this ___ or did I just ___ my ___ ___?",
        answers: ["magic", "meet", "perfect", "match"],
        blanks: 4
    },
    {
        text: "Do you ___ in ___ or ___ just ___ magic?",
        answers: ["believe", "love", "did", "happen"],
        blanks: 4
    },
    {
        text: "Could you be the ___ ___ that ___ my ___?",
        answers: ["missing", "piece", "completes", "puzzle"],
        blanks: 4
    },
    {
        text: "Are you a ___ of ___? Because you ___ my ___.",
        answers: ["burst", "sunshine", "light", "world"],
        blanks: 4
    },
    {
        text: "I'd ___ a ___ just to ___ your amazing ___.",
        answers: ["climb", "mountain", "catch", "smile"],
        blanks: 4
    },
    {
        text: "Do you ___ how ___ you are? You ___ my ___.",
        answers: ["know", "beautiful", "complete", "world"],
        blanks: 4
    },
    {
        text: "Is this ___ or did I just ___ my ___ ___?",
        answers: ["real", "find", "perfect", "match"],
        blanks: 4
    },
    {
        text: "You're the ___ that ___ to my ___ ___.",
        answers: ["key", "opens", "locked", "heart"],
        blanks: 4
    },
    // Continuing with more 4-word blanks... (up to 100)
    {
        text: "Are you a ___ of ___? Because you ___ my ___.",
        answers: ["ray", "sunshine", "brighten", "day"],
        blanks: 4
    },
    {
        text: "Do you ___ how ___ you are? You ___ my ___.",
        answers: ["realize", "incredible", "light", "world"],
        blanks: 4
    },
    {
        text: "I'd ___ the ___ just to ___ your ___.",
        answers: ["cross", "universe", "be", "near"],
        blanks: 4
    },
    {
        text: "Could you be the ___ that ___ my ___ ___?",
        answers: ["magic", "completes", "missing", "part"],
        blanks: 4
    },
    {
        text: "Are you a ___ of ___? Because you ___ my ___.",
        answers: ["drop", "magic", "complete", "ocean"],
        blanks: 4
    },
    {
        text: "Do you ___ in ___ or ___ just ___?",
        answers: ["believe", "destiny", "did", "happen"],
        blanks: 4
    },
    {
        text: "I'd ___ the ___ to ___ your ___.",
        answers: ["move", "mountains", "make", "smile"],
        blanks: 4
    },
    {
        text: "Are you the ___ that ___ my ___ ___?",
        answers: ["spark", "ignites", "hidden", "fire"],
        blanks: 4
    },
    {
        text: "Could you be the ___ ___ that ___ ___?",
        answers: ["perfect", "melody", "completes", "silence"],
        blanks: 4
    },
    {
        text: "Do you ___ how ___ you ___ my ___?",
        answers: ["know", "deeply", "touch", "heart"],
        blanks: 4
    },
    // Remaining entries follow the same pattern...
    {
        text: "You're the ___ that ___ to my ___ ___.",
        answers: ["light", "guides", "darkest", "night"],
        blanks: 4
    },
    {
        text: "Are you a ___ of ___? Because you ___ my ___.",
        answers: ["beam", "starlight", "illuminate", "world"],
        blanks: 4
    },
    {
        text: "Do you ___ how ___ you ___ my ___?",
        answers: ["realize", "perfectly", "complete", "story"],
        blanks: 4
    }
    // 添加更多4词题目……
  ]
};
