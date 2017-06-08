"use strict"

import RecorderModule from '../../../src/js/store/module/recorder'
import SpeechRecognition from '../../../src/js/service/speech-recognition'

jest.mock('../../../src/js/service/speech-recognition');

describe('Recorder module actions', () => {
    it('throws an error if the recorder is not supported', () => {
        const state = {
            isSupported: false
        };

        expect(
            () => {
                RecorderModule.actions.START_RECORDING({ state })
            }
        ).toThrow('The audio API is not supported by your browser');
    });

    it('throws an error if an error occured when recording voice', () => {
        const state = {
            isSupported: true,
            isRecording: false
        }

        SpeechRecognition.__setWillReturnError();

        expect(
            () => {
                RecorderModule.actions.START_RECORDING({ state });
            }
        ).toThrow('An error occured');


        expect(state.isRecording).toBe(true);
        expect(SpeechRecognition.getSpeechRecognitionObject().start).toBeCalled();
    });

    it('changes the state when the recording ends', () => {
        const state = {
            isSupported: true,
            isRecording: false
        }

        SpeechRecognition.__setWillEnd();

        RecorderModule.actions.START_RECORDING({ state });

        expect(SpeechRecognition.getSpeechRecognitionObject().start).toBeCalled();
        expect(state.isRecording).toBe(false);
    });

    it('dispatches the correct action when voice is recorded', () => {
        const state = {
            isSupported: true,
            isRecording: false
        }

        const dispatch = jest.fn();

        SpeechRecognition.__setWillReturnTranscript('Kung Fu Panda');

        RecorderModule.actions.START_RECORDING({ state, dispatch });

        expect(SpeechRecognition.getSpeechRecognitionObject().start).toBeCalled();
        expect(state.isRecording).toBe(true);
        expect(dispatch).toBeCalledWith('ON_VOICE_RECORDED', 'Kung Fu Panda');
    });
});

describe('Recorder module getters', () => {
    it('gets the recording state', () => {
        const state = {
            isRecording: 'the recording state'
        };

        const result = RecorderModule.getters.isRecording(state);
        expect(result).toBe('the recording state');
    });

    it("gets the recorder's isSupported state", () => {
        const state = {
            isSupported: 'yes it is'
        };

        const result = RecorderModule.getters.isRecorderSupported(state);
        expect(result).toBe('yes it is');
    });
});
