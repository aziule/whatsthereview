import Vue from 'vue'
import Vuex from 'vuex'
import * as actionsList from './actions-list'
import Movies from './module/movies'
import Recorder from './module/recorder'
import Search from './module/search'

Vue.use(Vuex)

const modules = {
    Movies,
    Recorder,
    Search,
};

const store = new Vuex.Store({
    modules,
    actionsList
})

export default store
