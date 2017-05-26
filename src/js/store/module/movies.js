import * as actionsList from '../actions-list'
import * as mutationsList from '../mutations-list'
import ApiClient from '../../service/api/client'
import Movie from '../../service/movie/model'

const getters = {
    allMovies: state => state.movies,
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

    var apiClient = new ApiClient();

    apiClient.queryApi(transcript)
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
                    apiData.movies[i].title,
                    apiData.movies[i].year,
                    apiData.movies[i].image,
                    apiData.movies[i].meterScore
                ));
            }

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
