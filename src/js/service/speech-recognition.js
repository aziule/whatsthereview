"use strict"

const SpeechRecognition = (window) => {
    const WindowSpeechRecognition = window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition;

    var recognition = null;

    if (WindowSpeechRecognition) {
        recognition = new WindowSpeechRecognition();
        recognition.lang = 'en-GB';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
    }

    return recognition;
};

export default SpeechRecognition;
