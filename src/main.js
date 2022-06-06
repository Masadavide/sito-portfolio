import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'






Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
}).$mount('#app')
