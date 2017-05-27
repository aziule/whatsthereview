import Vue from 'vue'
import Vuex from 'vuex'
import * as actionsList from './actions-list'
import recorder from './module/recorder'
import movies from './module/movies'
import search from './module/search'

Vue.use(Vuex)

const modules = {
    recorder,
    movies,
    search
};

const store = new Vuex.Store({
    modules,
    actionsList
})

export default store
