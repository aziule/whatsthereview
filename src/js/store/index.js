import Vue from 'vue'
import Vuex from 'vuex'
import * as actionsList from './actions-list'
import recorder from './module/speech/recorder'

Vue.use(Vuex)

const modules = {
    recorder
};

const store = new Vuex.Store({
    modules,
    actionsList
})

export default store
