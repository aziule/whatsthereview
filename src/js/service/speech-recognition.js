"use strict"

class SpeechRecognition {
    constructor(recorder) {
        this.recorder = recorder
    }

    record () {
        return new Promise((resolve, reject) => {
            this.recorder.onend = function() {
                return resolve()
            };

            this.recorder.onresult = function(event) {
                var transcript = event.results[0][0].transcript;
                return resolve(transcript)
            };

            this.recorder.onerror = function() {
                return reject('An error occurred')
            };

            this.recorder.start();
        })
    }
}

const speechRecognition = {
    detect(window) {
        const WindowSpeechRecognition = window.SpeechRecognition ||
            window.webkitSpeechRecognition ||
            window.mozSpeechRecognition ||
            window.msSpeechRecognition ||
            window.oSpeechRecognition;

        let recorder = null;

        if (WindowSpeechRecognition) {
            recorder = new WindowSpeechRecognition();
            recorder.lang = 'en-GB';
            recorder.interimResults = false;
            recorder.maxAlternatives = 1;
        }

        return new SpeechRecognition(recorder);
    }
};

export default speechRecognition;
