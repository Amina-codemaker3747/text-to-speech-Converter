const textInput = document.getElementById('text-input');
const convertBtn = document.getElementById('convert-btn');
const stopBtn = document.getElementById('stop-btn');
const audio = document.getElementById('audio');

// Function to convert text to speech
function textToSpeech(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = speechSynthesis.getVoices()[0]; // You can change the voice if needed
    speechSynthesis.speak(speech);
}

// Event listeners
convertBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text !== '') {
        textToSpeech(text);
    } else {
        alert('Please enter some text to convert.');
    }
});

stopBtn.addEventListener('click', () => {
    speechSynthesis.cancel();
});


