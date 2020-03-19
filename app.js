
const talkButton = document.querySelector('.talk')

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();

console.log(recognition);

recognition.onstart = () => {
  document.title = 'Listening'
  console.log('listening. What would you like to say?');
}

recognition.onresult = (event) => {
  document.title = 'How are you doing today?'

  const currentResultIndex = event.resultIndex;
  const transcript = event.results[currentResultIndex][0].transcript;
  console.log(transcript);
  readOutLoud(transcript)
}

talkButton.addEventListener('click', () => {
  console.log('button clicked');
  recognition.start();
})

const readOutLoud = (message) => {
  const speech = new SpeechSynthesisUtterance
  speech.text = personalizedAnswers(message);
  speech.volume = 3;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech)
}

const personalizedAnswers = (message) => {
  let arrayOfGreetings = ['I am well, what do you want to talk about today?', 'It is a nice day out. What are you doing talking to me? Go for a walk.']
  let randomIndex = Math.floor(Math.random() * Math.floor(arrayOfGreetings.length))
  console.log(randomIndex);
  return arrayOfGreetings[randomIndex];
}
