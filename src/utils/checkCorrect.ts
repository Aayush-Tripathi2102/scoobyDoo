import questionsLookup from "./questions"
interface CheckCorrectParams {
  questionId: string;
  userAnswer: string;
}

export function checkCorrect({ questionId, userAnswer }: CheckCorrectParams) {
  const question = questionsLookup[questionId];
  if (!question) {
    throw new Error("Invalid question ID");
  }

  const isCorrect = userAnswer === question.correctAnswer;
  return isCorrect;
}

