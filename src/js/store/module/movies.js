import * as actionsList from '../actions-list'
import MovieFetcher from '../../service/movie/fetcher'
import Evaluator from '../../service/movie/evaluator'
import Filter from '../../service/movie/filter'
import Sorter from '../../service/movie/sorter'
import store from '../'

const getters = {
    allMovies: state => Sorter.sortMovies(state.movies),
    isLoading: state => state.isLoading,
    moviesListError: state => state.error,
    moviesListWasUpdated: state => state.wasUpdated
}

const state = {
    isLoading: false,
    movies: [],
    error: null,
    wasUpdated: false // To know if at least one search has been done
}

const mutations = {
    updateMoviesList(state, movies) {
        state.movies = movies;
        state.wasUpdated = true;
    },
    setIsFetchingMovies(state) {
        state.isLoading = true;
    },
    setIsNotFetchingMovies(state) {
        state.isLoading = false;
    },
    setMoviesListError(state, error) {
        state.error = error;
    }
};

const actions = {
    [actionsList.SEARCH_IN_PROGRESS] ({commit}) {
        commit('setIsFetchingMovies');
    },
    [actionsList.SEARCH_DONE] ({commit}) {
        commit('setIsNotFetchingMovies');
    },
    [actionsList.ON_VOICE_RECORDED] ({state, commit}, transcript) {
        if (state.isLoading) {
            return;
        }

        store.dispatch(actionsList.SEARCH_IN_PROGRESS, transcript);

        MovieFetcher.fetchMovies(transcript)
            .then((movies) => {
                movies = Evaluator.evaluateMatchingScore(transcript, movies);
                movies = Filter.removeIrrelevantMovies(movies);
                commit('setMoviesListError', null);
                commit('updateMoviesList', movies);
            })
            .catch((error) => {
                commit('updateMoviesList', []);
                commit('setMoviesListError', 'An error occured when fetching the movies list.');
            })
            .then(() => {
                store.dispatch(actionsList.SEARCH_DONE);
            });
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
