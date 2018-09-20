import * as actionsList from '../actions-list'
import MovieFetcher from '../../service/movie/fetcher'
import Evaluator from '../../service/movie/evaluator'
import Filter from '../../service/movie/filter'
import Sorter from '../../service/movie/sorter'

// Inline here all the mutations / actions constants
const RECOMMENDATIONS_RETRIEVED = 'RECOMMENDATIONS_RETRIEVED'
const IS_RECORDING = 'IS_RECORDING'

const getters = {
    allMovies: state => Sorter.sortMovies(state.movies),
    isLoading: state => state.isLoading,
    moviesListError: state => state.error,
    moviesListWasUpdated: state => state.wasUpdated
}

// Use a data structure that describe the various state
// of the UI. No more checking booleans and long
// and error prone conditionnals.
const asyncData = {
  initial() {
    return {type: 'initial'}
  },
  recording() {
    return {type: 'recording'}
  },
  loading(query) {
    return {type: 'loading', data: query}
  },
  success(query, movies) {
    return {type: 'success', data: {query, movies}}
  },
  failure(error) {
    return {type: 'failure', data: error}
  }
}

const state = {
    recommendations: asyncData.initial(),
    recorder: null,
    wasUpdated: false // To know if at least one search has been done
}

const mutations = {
    updateMoviesList(state, movies) {
        state.movies = movies;
        state.wasUpdated = true;
    },
    setIsNotFetchingMovies(state) {
    },
    setMoviesListError(state, error) {
        state.error = error;
    },
    [IS_RECORDING](state) {
      state.recommendations = asyncData.recording()
    },
    [SEARCH_IN_PROGRESS](state, {transcript}) {
      state.recommendations = asyncData.loading(transcript)
    },
    [SEARCH_SUCCESS](state, {query, recommendations}) {
      // Move sync logic into mutations
      const relevantRecommendations = recommendations
        .map(Evaluator.addMatchingScore)
        .filter(Filter.removeIrrelevantMovies)

      state.recommendations = asyncData.success(transcript, relevantRecommendations)
    },
    [SEARCH_FAILURE](state, {message}) {
      state.recommendations = asyncData.failure(message)
    },

};

const actions = {
    [SPEECH_RECOGNITION_DETECTED] ({ commit }, {recorder}) {
        commit('recorderDetected', {recorder});
    },
    [START_RECORDING] ({ state, dispatch }) {
        if (!state.recored) {
            throw new Error('The audio API is not supported by your browser');
        }
        if (state.recommendations.type === 'recording') {
            return;
        }

        commit(IS_RECORDING)

        // I would move that into a Vue component that deals with this stuff.
        // I generally prefer to stay in the "component" paradigm when using
        // Vue or React. And use actions only to model an asynchronous function.
        speechRecognition.onend = function() {
            state.isRecording = false;
            commit(FINISHED_RECORDING)
        };

        speechRecognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            dispatch(ON_VOICE_RECORDED, transcript);
        };

        speechRecognition.onerror = function(e) {
            throw new Error('An error occured');
        };

        speechRecognition.start();
    },
    [ON_VOICE_RECORDED] ({state, commit, dispatch}, {transcript}) {
        if (state.recommendations.type === 'loading') {
            return;
        }

        commit(SEARCH_IN_PROGRESS, {transcript});

        MovieFetcher
            .fetchRecommendations(transcript)
            .then((recommendations) => commit(SEARCH_SUCCESS, {query: transcript, recommendations}))
            .catch((error) => commit(SEARCH_FAILURE, {message: 'something went wrong'})
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
