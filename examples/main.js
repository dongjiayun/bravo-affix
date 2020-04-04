import Vue from 'vue'
import App from './App.vue'

import affix from 'packages'

Vue.config.productionTip = false

Vue.use(affix)

new Vue({
  render: h => h(App),
}).$mount('#app')
