<template>
  <div class="quiz-container" v-if="!quizCompleted">
    <div class="question">{{ currentQuestion.question }}</div>
    <ul class="answers">
      <li v-for="(answer, index) in currentQuestion.answers" 
          :key="index"
          :class="answerClass(index)"
          @click="selectAnswer(index)"
          :aria-disabled="selectedAnswer !== null"
          >
        {{ answer }}
      </li>
    </ul>
    <button class="submit-btn" 
            :disabled="selectedAnswer === null"
            @click="submitAnswer">
      Submit
    </button>
    <button class="next-btn" v-if="answerSubmitted && !isLastQuestion" @click="nextQuestion">
      Next
    </button>
    <button class="restart-btn" v-if="answerSubmitted && isLastQuestion" @click="restartQuiz">
      Restart Quiz
    </button>
  </div>
  <div v-else class="score-section" tabindex="0" role="region" aria-live="polite">
    <p>You scored {{ score }}/{{ questions.length }}!</p>
    <button class="restart-btn" @click="restartQuiz">
      Take Quiz Again
    </button>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
  data() {
    return {
      questions: [
        {
          question: "What is the primary factor that affects coffee bean flavor?",
          answers: [
            "Roasting temperature",
            "Altitude where it's grown",
            "Type of coffee brewer used",
            "Milk added to the coffee"
          ],
          correct: 1
        },
        {
          question: "Which process removes caffeine from coffee beans?",
          answers: [
            "Decaffeination",
            "Fermentation",
            "Roasting",
            "Grinding"
          ],
          correct: 0
        },
        {
          question: "Which country is the largest producer of coffee in the world?",
          answers: [
            "Ethiopia",
            "Vietnam",
            "Brazil",
            "Colombia"
          ],
          correct: 2
        },
        {
          question: "What is the ideal water temperature for brewing coffee?",
          answers: [
            "50-60°C",
            "90-96°C",
            "100°C",
            "70-80°C"
          ],
          correct: 1
        },
        {
          question: "Arabica coffee beans are known for:",
          answers: [
            "High caffeine content and bitterness",
            "Smooth, complex flavor with less bitterness",
            "Being cheaper and easier to grow",
            "Being mostly used in instant coffee"
          ],
          correct: 1
        }
      ],
      currentQuestionIndex: 0,
      selectedAnswer: null,
      answerSubmitted: false,
      score: 0,
      quizCompleted: false
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    isLastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1;
    }
  },
  methods: {
    selectAnswer(index) {
      if (this.answerSubmitted) return;
      this.selectedAnswer = index;
    },
    submitAnswer() {
      if (this.selectedAnswer === null) return;
      this.answerSubmitted = true;
      if (this.selectedAnswer === this.currentQuestion.correct) {
        this.score++;
      }
      if (this.isLastQuestion) {
        this.quizCompleted = true;
      }
    },
    nextQuestion() {
      if (!this.isLastQuestion) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
        this.answerSubmitted = false;
      }
    },
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.selectedAnswer = null;
      this.answerSubmitted = false;
      this.score = 0;
      this.quizCompleted = false;
    },
    answerClass(index) {
      if (!this.answerSubmitted) {
        return this.selectedAnswer === index ? 'selected' : '';
      }
      if (index === this.currentQuestion.correct) {
        return 'correct';
      }
      if (index === this.selectedAnswer && this.selectedAnswer !== this.currentQuestion.correct) {
        return 'incorrect';
      }
      return '';
    }
  }
};
</script>

<style scoped>
.quiz-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #4a2c20;
  border-radius: 15px;
  padding: 2rem;
  color: #fff;
  box-shadow: 0 8px 30px rgba(0,0,0,0.5);
  max-width: 600px;
  margin: 0 auto;
}
.question {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fbd38d;
}
ul.answers {
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
}
ul.answers li {
  background-color: #6f4e37;
  margin-bottom: 0.75rem;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease, transform 0.1s ease;
  user-select: none;
}
ul.answers li:hover {
  background-color: #a9746e;
  transform: scale(1.03);
}
ul.answers li.selected {
  background-color: #fbd38d;
  color: #4a2c20;
  font-weight: 700;
  cursor: default;
}
ul.answers li.correct {
  background-color: #48bb78;
  color: #fff;
  font-weight: 700;
  cursor: default;
}
ul.answers li.incorrect {
  background-color: #f56565;
  color: #fff;
  font-weight: 700;
  cursor: default;
}

button.submit-btn, button.next-btn, button.restart-btn {
  background-color: #fbd38d;
  color: #4a2c20;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(251, 211, 141, 0.6);
  transition: background-color 0.3s ease;
  user-select: none;
}
button.submit-btn:disabled {
  background-color: #e0c9a2;
  cursor: not-allowed;
}
button.submit-btn:hover:not(:disabled), button.next-btn:hover, button.restart-btn:hover {
  background-color: #f5c55e;
}
.score-section {
  font-size: 1.75rem;
  font-weight: 900;
  color: #fbd38d;
  text-align: center;
  margin-top: 1rem;
  user-select: none;
}
</style>
