"use strict"

const SpeechRecognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition ||
    window.oSpeechRecognition;

var recognition = null;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-GB';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
}

export default recognition;