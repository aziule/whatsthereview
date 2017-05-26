import Vue from 'vue'
import store from './store'
import App from './component/app.vue'

new Vue({
    el: 'app',
    store,
    render: h => h(App)
})
