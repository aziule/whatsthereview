import SpeechRecognition from '../../service/speech-recognition'
import * as actionsList from '../actions-list';

const speechRecognition = SpeechRecognition.getSpeechRecognitionObject(window);

const getters = {
    isRecording: state => state.isRecording,
    isRecorderSupported: state => state.isSupported
}

const state = {
    isSupported: speechRecognition !== null,
    isRecording: false
};

const actions = {
    [actionsList.START_RECORDING] ({ state, dispatch }) {
        if (!state.isSupported) {
            throw new Error('The audio API is not supported by your browser');
        }

        if (state.isRecording) {
            return;
        }

        state.isRecording = true;

        speechRecognition.onend = function() {
            state.isRecording = false;
        };

        speechRecognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            dispatch(actionsList.ON_VOICE_RECORDED, transcript);
        };

        speechRecognition.onerror = function(e) {
            throw new Error('An error occured');
        };

        speechRecognition.start();
    }
};

const module = {
    state,
    actions,
    getters
};

export default module;
