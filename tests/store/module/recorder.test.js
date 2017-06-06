"use strict"

import RecorderModule from '../../../src/js/store/module/recorder'

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
