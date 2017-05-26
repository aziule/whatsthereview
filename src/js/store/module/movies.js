import * as actionsList from '../actions-list'
import * as mutationsList from '../mutations-list'
import ApiClient from '../../service/api/client'

const TYPE_TV_SHOW = 'TV_SHOW';
const TYPE_MOVIE = 'MOVIE';

const state = {
    movies: []
}

const mutations = {
    [mutationsList.SET_MOVIES_LIST] (state, { movies }) {
        state.movies = movies;
    }
};

const actions = {}

actions[actionsList.ON_VOICE_RECORDED] = (context, transcript) => {
    var apiClient = new ApiClient();

    console.log('fetching movie', transcript);

    apiClient.queryApi(transcript)
        .then((apiData) => {
            var movies = [];

            for (var i = 0; i < apiData.movies.length; i++) {
                movies.push([
                    TYPE_MOVIE,
                    apiData.movies[i].name,
                    apiData.movies[i].year,
                    apiData.movies[i].image,
                    apiData.movies[i].meterScore
                 ]);
            }

            for (var i = 0; i < apiData.tvSeries.length; i++) {
                movies.push([
                    TYPE_TV_SHOW,
                    apiData.tvSeries[i].title,
                    apiData.tvSeries[i].year,
                    apiData.tvSeries[i].image,
                    apiData.tvSeries[i].meterScore
                ]);
            }

            context.commit(mutationsList.SET_MOVIES_LIST, { movies });
        })
        .catch((error) => {
            // do something here with the error
            console.error(error);
        });
}

export default {
    state,
    actions,
    mutations
}
