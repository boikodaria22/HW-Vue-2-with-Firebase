import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import AppButton from './components/common/AppButton.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false


Vue.component('AppButton', AppButton)
Vue.component('AppPopUp', ()=> import('./components/common/AppPopUp.vue'))

new Vue({
  render: h => h(App),
}).$mount('#app')
