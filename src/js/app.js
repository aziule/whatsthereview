import Vue from 'vue'
import store from './store'
import App from './component/app.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
    el: 'app',
    store,
    render: h => h(App)
})
