import Vue from 'vue'
import 'mdbvue/build/css/mdb.css';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
