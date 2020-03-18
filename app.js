
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
}

talkButton.addEventListener('click', () => {
  console.log('button clicked');
  recognition.start();
})
