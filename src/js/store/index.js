import Vue from 'vue'
import Vuex from 'vuex'
import * as actionsList from './actions-list'
import recorder from './module/recorder'
import movies from './module/movies'
import search from './module/search'
import splash from './module/splash'

Vue.use(Vuex)

const modules = {
    recorder,
    movies,
    search,
    splash
};

const store = new Vuex.Store({
    modules,
    actionsList
})

export default store
