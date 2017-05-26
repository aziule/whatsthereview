import * as actionsList from '../actions-list'
import * as mutationsList from '../mutations-list'
import MovieFetcher from '../../service/movie/fetcher'
import Evaluator from '../../service/movie/evaluator'
import Filter from '../../service/movie/filter'
import Sorter from '../../service/movie/sorter'

const getters = {
    allMovies: state => Sorter.sortMovies(state.movies),
    isLoading: state => state.isLoading
}

const state = {
    isLoading: false,
    movies: []
}

const mutations = {
    [mutationsList.SET_MOVIES_LIST] (state, { movies }) {
        state.movies = movies;
    },
    setIsFetchingMovies(state) {
        state.isLoading = true;
    },
    setIsNotFetchingMovies(state) {
        state.isLoading = false;
    }
};

const actions = {}

actions[actionsList.ON_VOICE_RECORDED] = ({ state, commit }, transcript) => {
    if (state.isLoading) {
        return;
    }

    commit('setIsFetchingMovies');

    MovieFetcher.fetchMovies(transcript)
        .then((movies) => {
            movies = Evaluator.evaluateMatchingScore(transcript, movies);
            movies = Filter.removeIrrelevantMovies(movies);
            console.log(movies)
            commit(mutationsList.SET_MOVIES_LIST, { movies });
        })
        .catch((error) => {
            // do something here with the error
            console.error(error);
        })
        .then(() => {
            commit('setIsNotFetchingMovies');
        });
}

export default {
    state,
    actions,
    mutations,
    getters
}
