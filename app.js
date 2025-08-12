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

  isCorrect(answer) {
    return answer === this.correctAnswer;
  }
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion() {
    if (this.currentIndex >= this.questions.length) {
      console.log("Quiz has ended");
      return null;
    }

    const currentQuestion = this.questions[this.currentIndex];
    const question = new Question(
      currentQuestion.text,
      currentQuestion.options,
      currentQuestion.correctAnswer
    );

    document.getElementById("question-text").textContent = question.text;
    const optionContainer = document.getElementById("options-container");
    optionContainer.innerHTML = "";

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.classList.add("option-btn");
      button.textContent = option;

      optionContainer.appendChild(button);

      button.addEventListener(
        "click",
        () => {
          this.submitAnswer(button.textContent);
        }
        // console.log(button.textContent)
      );
    });

    return question;
  }

  submitAnswer(answer) {
    // const currentQuestion = this.getCurrentQuestion();
    const currentQuestion = this.questions[this.currentIndex];
    const questionObj = new Question(
      currentQuestion.text,
      currentQuestion.options,
      currentQuestion.correctAnswer
    );

    if (questionObj.isCorrect(answer)) {
      this.score++;
      document.getElementById(
        "score-text"
      ).textContent = `Score: ${this.score}`;
      console.log(this.score);
    }
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.questions.length) {
      this.getCurrentQuestion();
    } else {
      this.hasEnded();
    }
  }

  hasEnded() {
    document.getElementById(
      "question-text"
    ).textContent = `Quiz Finished!: You scored: ${this.score} out of 10`;
    document.getElementById("options-container").innerHTML = "";
  }
}

const nextButton = document.getElementById("next-btn");
const quiz = new Quiz(questions);
quiz.getCurrentQuestion();

nextButton.addEventListener("click", () => quiz.nextQuestion());
