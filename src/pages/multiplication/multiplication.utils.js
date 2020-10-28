export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const filterQuestions = (questions, selections) =>
  questions.filter(
    element => selections[element.number1] || selections[element.number2]
  );
