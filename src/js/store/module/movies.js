import * as actionsList from '../actions-list'
import * as mutationsList from '../mutations-list'
import ApiClient from '../../service/api/client'

const TYPE_TV_SHOW = 'TV_SHOW';
const TYPE_MOVIE = 'MOVIE';

const getters = {
    allMovies: state => state.movies
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
                movies.push({
                    // @todo: use a class objet here rather than a pure js object
                    type: TYPE_MOVIE,
                    name: apiData.movies[i].name,
                    year: apiData.movies[i].year,
                    image: apiData.movies[i].image,
                    score: apiData.movies[i].meterScore
                });
            }

            for (var i = 0; i < apiData.tvSeries.length; i++) {
                movies.push({
                    // @todo: same here
                    type: TYPE_TV_SHOW,
                    name: apiData.movies[i].title,
                    year: apiData.movies[i].year,
                    image: apiData.movies[i].image,
                    score: apiData.movies[i].meterScore
                });
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
