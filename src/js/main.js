import Vue from 'vue'
import store from './store'
import * as actionsList from './store/actions-list'
import App from './component/app.vue'

store.dispatch(actionsList.START_RECORDING);

new Vue({
    el: 'app',
    components: { App }
})
