import * as actionsList from '../actions-list'
import * as mutationsList from '../mutations-list'

const getters = {
    currentQuery: state => state.query,
}

const state = {
    query: null
}

const mutations = {
    [mutationsList.SET_SEARCH_QUERY] (state, query) {
        state.query = query;
    },
};

const actions = {}

actions[actionsList.ON_VOICE_RECORDED] = ({ commit }, transcript) => {
    commit(mutationsList.SET_SEARCH_QUERY, transcript);
}

export default {
    state,
    actions,
    mutations,
    getters
}
