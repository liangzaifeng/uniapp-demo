import Vue from 'vue'
import App from './App'
import axios from './lib/axios'
import store from './lib/store.js'
Vue.prototype.$store = store
// import lazyImage from './components/lazy-image.vue'
// Vue.component('lazy-image', lazyImage)


// import VueLazyload from 'vue-lazyload'  
// Vue.use(VueLazyload,{
//   loading:'/static/image/60x60.png'
// })  

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    loading:'/static/image/60x60.png'
})

Vue.prototype.$http = axios
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    // store,
    ...App
})
app.$mount()
