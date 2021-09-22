window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');

words.appendChild(p);

recognition.addEventListener('result', ({ results }) => {
  const transcript = Array.from(results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    if (results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }

  p.textContent = transcript;
})

recognition.addEventListener('end', recognition.start);

recognition.start();
