import Vue from 'vue'
import Vuex from 'vuex'
import * as actionsList from './actions-list'
import ShowFetcher from '../service/show/fetcher'
import Evaluator from '../service/show/evaluator'
import Filter from '../service/show/filter'
import Sorter from '../service/show/sorter'

Vue.use(Vuex)

const asyncData = {
    initial() {
        return {type: 'initial'}
    },
    recording() {
        return {type: 'recording'}
    },
    recordingError(error) {
        return {type: 'recording-error', data: { error }}
    },
    loading(query) {
        return {type: 'loading', data: { query }}
    },
    searchSuccess(query, shows) {
        return {type: 'success', data: { query, shows }}
    },
    searchFailure(query, error) {
        return {type: 'failure', data: { query, error }}
    }
}

const state = {
    recorder: null,
    recommendations: asyncData.initial(),
    wasUpdated: false
}

const getters = {
    recorder: state => state.recorder,
    recommendations: state => state.recommendations,
    isInitialised: state => state.recommendations.type === 'initial',
    isRecording: state => state.recommendations.type === 'recording',
    isLoading: state => state.recommendations.type === 'loading',
    isSuccess: state => state.recommendations.type === 'success',
    isFailure: state => state.recommendations.type === 'failure',
    showsListWasUpdated: state => state.wasUpdated,
}

const types = {
    RECORDER_DETECTED: 'RECORDER_DETECTED',
    IS_RECORDING: 'IS_RECORDING',
    END_RECORDING: 'END_RECORDING',
    RECORDING_ERROR: 'RECORDING_ERROR',
    SEARCH_IN_PROGRESS: 'SEARCH_IN_PROGRESS',
    SEARCH_SUCCESS: 'SEARCH_SUCCESS',
    SEARCH_FAILURE: 'SEARCH_FAILURE',
}

const mutations = {
    [types.RECORDER_DETECTED] (state, recorder) {
        state.recorder = recorder
    },
    [types.IS_RECORDING] (state) {
        state.recommendations = asyncData.recording()
    },
    [types.END_RECORDING] (state) {
        state.recommendations = asyncData.initial()
    },
    [types.RECORDING_ERROR] (state, error) {
        state.recommendations = asyncData.recordingError(error)
    },
    [types.SEARCH_IN_PROGRESS] (state, { query }) {
        state.recommendations = asyncData.loading(query)
    },
    [types.SEARCH_SUCCESS] (state, { query, shows }) {
        let recommendedShows = Evaluator.addMatchingScore(query, shows)
        recommendedShows = Filter.removeIrrelevantShows(recommendedShows)
        recommendedShows = Sorter.sortShows(recommendedShows)

        state.recommendations = asyncData.searchSuccess(query, recommendedShows)
        state.wasUpdated = true
    },
    [types.SEARCH_FAILURE] (state, { query, error }) {
        state.recommendations = asyncData.searchFailure(query, error)
        state.wasUpdated = true
    }
}

const actions = {
    [actionsList.SPEECH_RECOGNITION_DETECTED] ({ commit }, { recorder }) {
        commit(types.RECORDER_DETECTED, recorder)
    },
    [actionsList.START_RECORDING] ({ getters, dispatch, commit }) {
        if (!state.recorder) {
            throw new Error('The audio API is not supported by your browser')
        }

        if (getters.isRecording) {
            return
        }

        commit(types.IS_RECORDING)

        getters.recorder.record()
            .then((transcript) => {
                commit(types.END_RECORDING)

                if (transcript) {
                    dispatch(actionsList.VOICE_RECORDED, { query: transcript });
                    return
                }
            }).catch((error) => {
            commit(types.RECORDING_ERROR, 'An error occurred')
        })
    },
    [actionsList.VOICE_RECORDED] ({ getters, commit }, { query }) {
        if (getters.isLoading) {
            return
        }

        commit(types.SEARCH_IN_PROGRESS, { query })

        ShowFetcher
            .fetchShows(query)
            .then(({ shows }) => {
                commit(types.SEARCH_SUCCESS, { query, shows })
            })
            .catch((error) => {
                commit(types.SEARCH_FAILURE, { query, error })
            })
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    types,
})

export default store
