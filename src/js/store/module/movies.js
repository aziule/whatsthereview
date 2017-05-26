import * as actionsList from '../actions-list'
import * as mutationsList from '../mutations-list'
import ApiClient from '../../service/api/client'
import Movie from '../../service/movie/model'
import Evaluator from '../../service/movie/evaluator'

const getters = {
    allMovies: (state) =>
    {
        return state.movies.sort(function(a, b) {
            if (a.matchingScore === b.matchingScore) {
                if (a.name < b.name) {
                    return -1;
                }

                if (a.name > b.name) {
                    return 1;
                }

                return 0;
            }

            return b.matchingScore - a.matchingScore;
        });
    },
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
        console.log('fetching movies');
        state.isLoading = true;
    },
    setIsNotFetchingMovies(state) {
        console.log('finished fetching movies');
        state.isLoading = false;
    }
};

const actions = {}

actions[actionsList.ON_VOICE_RECORDED] = ({ state, commit }, transcript) => {
    if (state.isLoading) {
        return;
    }

    commit('setIsFetchingMovies');

    ApiClient.queryApi(transcript)
        .then((apiData) => {
            var movies = [];

            for (var i = 0; i < apiData.movies.length; i++) {
                movies.push(new Movie(
                    Movie.TYPE_MOVIE,
                    apiData.movies[i].name,
                    apiData.movies[i].year,
                    apiData.movies[i].image,
                    apiData.movies[i].meterScore
                ));
            }

            for (var i = 0; i < apiData.tvSeries.length; i++) {
                movies.push(new Movie(
                    Movie.TYPE_TV_SHOW,
                    apiData.tvSeries[i].title,
                    apiData.tvSeries[i].year,
                    apiData.tvSeries[i].image,
                    apiData.tvSeries[i].meterScore
                ));
            }

            movies = Evaluator.evaluateMatchingScore(transcript, movies);

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
