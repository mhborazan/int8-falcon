function processArrayWords(array) {
  let currentIndex = 0;
  let currentWord = array[currentIndex];
  let currentLetterIndex = 0;

  const processLetter = () => {
    if (currentLetterIndex < currentWord.length) {
      const letter = currentWord[currentLetterIndex];
      console.log(letter); // You can modify this line to perform any desired action with the letter

      currentLetterIndex++;
      setTimeout(processLetter, 1000); // Delay between processing each letter (1 second in this example)
    } else {
      setTimeout(deleteWord, 1000); // Delay before deleting the word (1 second in this example)
    }
  };

  const deleteWord = () => {
    if (currentWord.length > 0) {
      currentWord = currentWord.slice(0, -1);
      console.log(currentWord); // You can modify this line to perform any desired action with the word

      setTimeout(deleteWord, 1000); // Delay between deleting each letter (1 second in this example)
    } else {
      currentIndex++;
      if (currentIndex < array.length) {
        currentWord = array[currentIndex];
        currentLetterIndex = 0;
        setTimeout(processLetter, 1000); // Delay before starting to process the next word (1 second in this example)
      }
    }
  };

  processLetter(); // Start processing the first word
}

// Example usage:
const wordsArray = ["apple", "banana", "carrot"];
processArrayWords(wordsArray);
