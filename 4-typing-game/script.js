const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// The starting time
let startTime = Date.now();
// Page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('type-value');

document.getElementById('start').addEventListener('click', () => {
  // The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // split() splits a string into an array of substrings, and returns the array
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;  
  // Create an array of span elements so we can set a class
  // The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
  // In JavaScript, backticks ` ` are used for template literals, which allow for easier string interpolation and multi-line strings.
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Covert into string and set as innerHTML on quote display
  // innerHTML gets or sets the HTML or XML markup contained within the element.
  // The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
  // separated by commas or a specified separator string.
  quoteElement.innerHTML = spanWords.join('');
  // Hight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  // The focused element is the element that will receive keyboard and similar events by default.
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});

// The addEventListener() method sets up a function that will be called whenever the specified event is delivered to the target.
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
    messageElement.className = 'greeting';
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
