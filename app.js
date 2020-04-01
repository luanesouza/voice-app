
const talkButton = document.querySelector('.talk')
const increasePitchButton = document.querySelector('.increasePitch')
const decreasePitchButton = document.querySelector('.decreasePitch')

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();

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

const readOutLoud = (message, pitch, rate) => {
  const speech = new SpeechSynthesisUtterance
  speech.text = personalizedAnswers(message);
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech)
}

const personalizedAnswers = (message) => {
  let arrayOfGreetings = ['I am well. How are you feeling?', 'It is a nice day out. What are you doing talking to me? Go for a walk.']


  if(message.includes('how are you')) {
    console.log('sup');
    let randomIndex = Math.floor(Math.random() * Math.floor(arrayOfGreetings.length))
    console.log(randomIndex);
    return arrayOfGreetings[randomIndex];
  } else {
    return "Can you repeat, please?"
  }


}
