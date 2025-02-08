interface Question {
  questionString: string;
  correctAnswer: string;
}

type QuestionsLookup = Record<string, Question>;

const questionsLookup: QuestionsLookup = {
    q1: {
      questionString: "What is the capital of France?",
      correctAnswer: String(process.env.Q1_ANSWER),
    },
    q2: {
      questionString: "What is 2 + 2?", 
      correctAnswer: String(process.env.Q2_ANSWER),
    },
    q3: {
      questionString: "What is the largest planet in our solar system?",
      correctAnswer: String(process.env.Q3_ANSWER),
    },

  };
  
  export default questionsLookup;