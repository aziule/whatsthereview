import * as actionsList from '../actions-list'

const state = {
    movies: []
}

const getters = {
    allMovies: state => state.movies
}

const actions = {}

actions[actionsList.ON_VOICE_RECORDED] = (state, transcript) => {
    console.log(transcript);
}

export default {
    state,
    getters,
    actions
}
