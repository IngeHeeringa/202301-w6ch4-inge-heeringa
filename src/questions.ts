const questions = [
  {
    type: "input",
    name: "port",
    message: "On which port would you like to serve the API?",
    validate: (answer: number) =>
      Number.isInteger(+answer) && +answer > 0
        ? true
        : "Please enter a positive integer",
  },
  {
    type: "confirm",
    name: "isAuthorized",
    message: "Do you wish to allow clients to create, delete or modify?",
  },
];

export default questions;
