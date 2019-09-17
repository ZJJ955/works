import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import tabBar from '@/components/tabBar'
import shopp1 from '@/components/shopp1'
import shopp2 from '@/components/shopp2'
import banner1 from '@/components/banner1'

Vue.config.productionTip = false

Vue.use(Mint);
Vue.component('tabBar',tabBar);
Vue.component('shopp1',shopp1);
Vue.component('shopp2',shopp2);
Vue.component('banner1',banner1);
const URL = 'http://zhaoping.langfang1088.com/';
Vue.prototype.$post = (url, data = new FormData()) =>{
  return new Promise((resolve,reject) =>{
    axios.post(URL+url,data).then(res =>{
      resolve(res);
    })
  })
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
