import * as actionsList from '../actions-list'
import * as mutationsList from '../mutations-list'

const getters = {
    currentQuery: state => state.query,
    searchesHistory: state => state.searches
}

const state = {
    query: null,
    searches: []
}

const mutations = {
    [mutationsList.SET_SEARCH_QUERY] (state, query) {
        state.query = query;
    },
    addSearch(state, query) {
        state.searches.push(query);
    }
};

const actions = {
    [actionsList.ON_VOICE_RECORDED] ({ commit }, transcript) {
        commit(mutationsList.SET_SEARCH_QUERY, transcript);
    },
    [actionsList.SEARCH_DONE]({ commit }, query) {
        commit('addSearch', query);
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
