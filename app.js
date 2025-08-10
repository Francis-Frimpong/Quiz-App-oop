const questions = [
  {
    text: "What is the capital of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    correctAnswer: "Tokyo",
  },
  {
    text: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Leopard"],
    correctAnswer: "Lion",
  },
  {
    text: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    text: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    text: "Which planet is closest to the sun?",
    options: ["Earth", "Venus", "Mercury", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    text: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Tesla", "Galileo"],
    correctAnswer: "Einstein",
  },
  {
    text: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correctAnswer: "Blue Whale",
  },
  {
    text: "Which instrument has keys, pedals, and strings?",
    options: ["Guitar", "Piano", "Violin", "Flute"],
    correctAnswer: "Piano",
  },
  {
    text: "In which year did World War II end?",
    options: ["1942", "1945", "1948", "1950"],
    correctAnswer: "1945",
  },
  {
    text: "What is the fastest land animal?",
    options: ["Cheetah", "Horse", "Leopard", "Kangaroo"],
    correctAnswer: "Cheetah",
  },
];

class Question {
  constructor(text, options, correctAnswer) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  isCorrect(answer) {}
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion() {
    const currentQuestion = this.questions[this.currentIndex];
    const question = new Question(
      currentQuestion.text,
      currentQuestion.options,
      currentQuestion.correctAnswer
    );

    return question;
  }

  submitAnswer(answer) {}

  nextQuestion() {
    this.currentIndex++;
    this.getCurrentQuestion();
    return this.questions[this.currentIndex];
  }

  hasEnded() {}
}

const quiz = new Quiz(questions);
console.log(quiz.getCurrentQuestion());
console.log(quiz.nextQuestion());
console.log(quiz.nextQuestion());
