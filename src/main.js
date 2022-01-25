import Vue from 'vue'
import App from './App.vue'
import AppSnackbar from './components/AppSnackbar'
import AppButton from './components/common/AppButton.vue'
Vue.config.productionTip = false

Vue.component('AppSnackbar', AppSnackbar)
Vue.component('AppButton', AppButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
