import * as actionsList from '../actions-list'

const getters = {
    currentQuery: state => state.query
}

const state = {
    query: null
}

const mutations = {
    setSearchQuery: (state, query) => {
        state.query = query;
    }
};

const actions = {
    [actionsList.ON_VOICE_RECORDED] ({ commit }, transcript) {
        commit('setSearchQuery', transcript);
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
