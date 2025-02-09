interface Question {
  questionString: string;
  correctAnswer: string;
}

type QuestionsLookup = Record<string, Question>;

const questionsLookup: QuestionsLookup = {
  q1: {
    questionString:
      "Deserts, Dynasties, Power and Prophecy- the second act unfolded in 2024. In this tale where sands hold secrets and the future whispers in fragments, a pivotal moment folds back upon itself. Hidden under the sand, an important date (ddmmyy) murmurs its truth in reverse. But only when seen through the lens of a dual world can its essence be fully grasped- think in terms of light and shadow, presence and absence.",
    correctAnswer: "1100111010001100010",
  },
  q2: {
    questionString:
      "Let those sands of destiny now lead you into a new world- a world that features tennis courts of rivalry. One popular name unites both tales. Seek the link that binds the desert to the game, and you’ll find the final name.",
    correctAnswer: String(process.env.NEXT_Q2_ANSWER),
  },
  q3: {
    questionString:
      "Two big names, one big feud. Multiple callouts, age long fights. One song drop- a full stop. The length of those verses holds the key to what you seek. Trace its sum to a title buried in the department of a tortured poet’s lament. Find the title and use the number once more until only one word remains",
    correctAnswer: String(process.env.NEXT_Q3_ANSWER),
  },
  q4: {
    questionString:
      "Where flames ignite and nations unite, the world’s grand stage awaits. Seek the city’s grand portrait on the official site—where a tower stands tall and a number marks its legacy. Let that number lead you to the nation that stood in its place when the world was keeping score.",
    correctAnswer: String(process.env.NEXT_Q4_ANSWER),
  },
  q5: {
    questionString:
      "Claws clash with chaos as two legends collide. One heals fast, the other talks faster. Follow the mayhem to where Marvel first unveils this war—watch closely for the moment a weapon grins back. A mind in chaos, new emotions take control. Watch where Pixar opens the door. Let time guide you to this world where emotions stir. Pause at the same mark when the fiery fear had let out a familiar grin. And there you will find a single phrase that awaits being found.",
    correctAnswer: String(process.env.NEXT_Q5_ANSWER),
  },
  q6: {
    questionString:
      "Start your quest where the pixels meet—the Instagram page holds the first key! Follow the trail of moments captured, where words hold more than they seem. Legends were made where these numbers point. Find the ground, recall the glory—history holds your next clue. Numbers lead the way, and with it, the date (ddmmyy) seals your fate.",
    correctAnswer: String(process.env.NEXT_Q6_ANSWER),
  },
};

export default questionsLookup;
