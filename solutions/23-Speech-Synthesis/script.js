const msg = new SpeechSynthesisUtterance();
let voices = [];
let languages = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const languageDropdown = document.querySelector('[name="lang"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('textarea').value

function populateVoicesAndLanguages() {
  voices = this.getVoices();
  languages = [...new Set(voices.map(voice => voice.lang))]

  const languageOptions = languages
    .map(language => `<option value="${language}">${language}</option>`)
    .join('');
  
  languageDropdown.innerHTML = languageOptions;

  populateVoiceDropdown(null, true);
}

// Sets voice options based on a filter
function populateVoiceDropdown(e, skipFilter = false) {
  const voiceOptions = voices
    .filter(voice => skipFilter ? voice.name.length : voice.lang === this.value)
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
  
  voicesDropdown.innerHTML = voiceOptions;
}

// Sets the voice based on select.
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  handleSpeak()
}

// Cancels currently speaking voice. Speaks again if set to speak.
function handleSpeak(restart = true) {
  speechSynthesis.cancel()

  if (restart) {
    speechSynthesis.speak(msg)
  }
}

// Sets rate, pitch, or text for the voice, then speaks it.
function setVoiceOptions() {
  const { value, name } = this;
  msg[name] = value;
  handleSpeak();
}

speechSynthesis.addEventListener('voiceschanged', populateVoicesAndLanguages);
languageDropdown.addEventListener('change', populateVoiceDropdown);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('input', setVoiceOptions));

speakButton.addEventListener('click', handleSpeak);
stopButton.addEventListener('click', () => handleSpeak(false));