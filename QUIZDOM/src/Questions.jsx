const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "user interface framework", isCorrect: true },
      { id: 2, text: "both a and b", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
  },
  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect: false },
      { id: 2, text: "C", isCorrect: false },
      { id: 3, text: "C++", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect: false },
      { id: 1, text: "Internal storage of the component.", isCorrect: true },
      { id: 2, text: "External storage of the component.", isCorrect: false },
      { id: 3, text: "None of the above.", isCorrect: false },
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      {
        id: 0,
        text: "1",
        isCorrect: true,
      },
      {
        id: 1,
        text: "2",
        isCorrect: false,
      },
      {
        id: 2,
        text: "3",
        isCorrect: false,
      },
      {
        id: 3,
        text: "4",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is JSX in React?",
    options: [
      { id: 0, text: "JavaScript XML", isCorrect: true },
      { id: 1, text: "Java Syntax Extension", isCorrect: false },
      { id: 2, text: "JSON Extension", isCorrect: false },
      { id: 3, text: "JavaScript XML Style", isCorrect: false },
    ],
  },

  {
    text: "Which lifecycle method is called just before a component is unmounted?",
    options: [
      { id: 0, text: "componentWillUnmount", isCorrect: true },
      { id: 1, text: "componentDidUnmount", isCorrect: false },
      { id: 2, text: "componentWillUpdate", isCorrect: false },
      { id: 3, text: "componentDidUpdate", isCorrect: false },
    ],
  },
  {
    text: "What does React.js primarily focus on?",
    options: [
      { id: 0, text: "Back-end development", isCorrect: false },
      { id: 1, text: "User interface", isCorrect: true },
      { id: 2, text: "Database management", isCorrect: false },
      { id: 3, text: "Server-side rendering", isCorrect: false },
    ],
  },
  {
    text: "What is the default port for a React development server?",
    options: [
      { id: 0, text: "3000", isCorrect: true },
      { id: 1, text: "8080", isCorrect: false },
      { id: 2, text: "5000", isCorrect: false },
      { id: 3, text: "4000", isCorrect: false },
    ],
  },
  {
    text: "In JavaScript, what is the purpose of '=== '?",
    options: [
      { id: 0, text: "Assigning a value to a variable", isCorrect: false },
      {
        id: 1,
        text: "Checking for equality (strict equality)",
        isCorrect: true,
      },
      { id: 2, text: "Defining a function", isCorrect: false },
      { id: 3, text: "Performing a bitwise operation", isCorrect: false },
    ],
  },
  {
    text: "What is the role of the 'render' method in a React component?",
    options: [
      { id: 0, text: "Handling component state", isCorrect: false },
      { id: 1, text: "Defining component structure", isCorrect: true },
      { id: 2, text: "Executing asynchronous tasks", isCorrect: false },
      { id: 3, text: "Managing component lifecycle", isCorrect: false },
    ],
  },
];

export default questions;
