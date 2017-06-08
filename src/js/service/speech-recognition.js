"use strict"

const speechRecognition = {
    getSpeechRecognitionObject(window) {
        const WindowSpeechRecognition = window.SpeechRecognition ||
            window.webkitSpeechRecognition ||
            window.mozSpeechRecognition ||
            window.msSpeechRecognition ||
            window.oSpeechRecognition;

        let recognition = null;

        if (WindowSpeechRecognition) {
            recognition = new WindowSpeechRecognition();
            recognition.lang = 'en-GB';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
        }

        return recognition;
    }
};

export default speechRecognition;
