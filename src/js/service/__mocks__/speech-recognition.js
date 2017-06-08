"use strict"

const speechRecognition = jest.genMockFromModule('../speech-recognition');

var speechRecognitionObject = {
    start: jest.fn(),
    onend: jest.fn(),
    onresult: jest.fn(),
    onerror: jest.fn()
};

function __setWillReturnError(e) {
    speechRecognitionObject.start = jest.fn(() => {
        return speechRecognitionObject.onerror(e);
    });
}

function __setWillReturnTranscript(transcript) {
    speechRecognitionObject.start = jest.fn(() => {
        return speechRecognitionObject.onresult({
            results: [
                [
                    { transcript: transcript }
                ]
            ]
        });
    });
}

function __setWillEnd() {
    speechRecognitionObject.start = jest.fn(() => {
        return speechRecognitionObject.onend();
    });
}

function getSpeechRecognitionObject() {
    return speechRecognitionObject;
}

speechRecognition.__setWillReturnError = __setWillReturnError;
speechRecognition.__setWillReturnTranscript = __setWillReturnTranscript;
speechRecognition.__setWillEnd = __setWillEnd;
speechRecognition.getSpeechRecognitionObject = getSpeechRecognitionObject;

export default speechRecognition;
