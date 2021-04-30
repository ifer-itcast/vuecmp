import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Button from './components/button.vue'
import Dialog from './components/Dialog.vue'

Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
