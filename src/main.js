import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'

import * as VueGoogleMaps from "vue2-google-maps" // Import package

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDnNOKCj4HUyOtsFuj0VTmiYaB4TRWxtjA",
    libraries: "places"
  }
});




Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
}).$mount('#app')
