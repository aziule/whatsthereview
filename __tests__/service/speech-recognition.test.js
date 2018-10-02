"use strict"

import SpeechRecognition from '../../src/js/service/speech-recognition';

jest.unmock('../../src/js/service/speech-recognition');

describe('Speech recognition service', () => {
    it('should return a correct recorder object if the browser supports it', () => {
        const windowObject = {
            SpeechRecognition: function() {
                this.lang = 'default-lang';
                this.interimResults = true;
                this.maxAlternatives = 0;
            }
        };

        const speechRecognition = SpeechRecognition.detect(windowObject);
        expect(speechRecognition.recorder).not.toBeNull();
        expect(speechRecognition.recorder.lang).toBe('en-GB');
        expect(speechRecognition.recorder.interimResults).toBe(false);
        expect(speechRecognition.recorder.maxAlternatives).toBe(1);
    });

    it('should return a null recorder if the browser does not support the SpeechRecognition API', () => {
        const windowObject = {};
        const speechRecognition = SpeechRecognition.detect(windowObject);
        expect(speechRecognition.recorder).toBeNull();
    });
});