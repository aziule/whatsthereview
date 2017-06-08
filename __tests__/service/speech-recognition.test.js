"use strict"

import SpeechRecognition from '../../src/js/service/speech-recognition';

jest.unmock('../../src/js/service/speech-recognition');

it('should return a correct SpeechRecognition object if the browser supports it', () => {
    const windowObject = {
        SpeechRecognition: function() {
            this.lang = 'default-lang';
            this.interimResults = true;
            this.maxAlternatives = 0;
        }
    };

    const speechRecognition = SpeechRecognition.getSpeechRecognitionObject(windowObject);
    expect(speechRecognition.lang).toBe('en-GB');
    expect(speechRecognition.interimResults).toBe(false);
    expect(speechRecognition.maxAlternatives).toBe(1);
});

it('should return null if the browser does not support the SpeechRecognition API', () => {
    const windowObject = {};
    expect(SpeechRecognition.getSpeechRecognitionObject(windowObject)).toBeNull();
});
